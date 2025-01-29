import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: ".",
  server: {
    host: true,
    port: 5173,
  },
  build: {
    outDir: "build",
    assetsDir: "assets",
    sourcemap: true,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/three/examples/jsm/libs/basis/*',
          dest: 'assets/libs/basis',
        },
      ],
    }),
  ],
});
