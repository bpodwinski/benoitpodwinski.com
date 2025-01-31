import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import compression from "vite-plugin-compression2";

export default defineConfig({
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
    outDir: "build",
    assetsDir: "assets",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
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
          src: "node_modules/three/examples/jsm/libs/basis/*",
          dest: "assets/libs/basis",
        },
      ],
    }),
  ],
});
