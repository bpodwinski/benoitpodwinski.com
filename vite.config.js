import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import compression from "vite-plugin-compression2";

export default defineConfig({
  base: "/threejs",
  root: ".",
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    port: 3000,
    https: {
      pfx: "cert.pfx",
      passphrase: "dev",
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    sourcemap: false,
    outDir: "./content/themes/source/assets/threejs/",
    assetsDir: "assets",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    lib: {
      entry: "threejs/index.js",
      name: "ThreeJSApp",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "index.js",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three")) return "three";
            if (id.includes("gsap")) return "gsap";
            if (id.includes("bootstrap")) return "bootstrap";
            return "vendor";
          }
        },
      },
    },
  },
  plugins: [
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      deleteOriginalAssets: false,
    }),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/three/examples/jsm/libs/basis/basis_transcoder.*",
          dest: ".",
        },
      ],
    }),
  ],
});
