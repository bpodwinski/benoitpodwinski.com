import { defineConfig } from "vite";
import browsersync from "vite-plugin-browsersync";

export default defineConfig({
  root: ".", // Racine du projet
  server: {
    proxy: {
      "/": "http://192.168.1.190", // Proxifie vers l'adresse locale
    },
  },
  plugins: [
    browsersync({
      proxy: "192.168.1.190",
      files: ["*.html", "assets/css/**/*.css", "assets/js/**/*.js"], // Fichiers à surveiller
      ghostMode: false,
      open: false,
      reloadOnRestart: true,
    }),
  ],
});
