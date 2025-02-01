import { defineConfig } from "vite";
<<<<<<< HEAD
import { viteStaticCopy } from "vite-plugin-static-copy";
import compression from "vite-plugin-compression2";
=======
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094

export default defineConfig({
  root: ".",
  server: {
<<<<<<< HEAD
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
=======
    host: true,
    port: 5173,
  },
  build: {
    outDir: "build",
    assetsDir: "assets",
    sourcemap: true,
  },
>>>>>>> 73cf912ee5fc08b0ff02aaf0783f6d2c027e7094
});
