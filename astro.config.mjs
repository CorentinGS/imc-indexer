import { defineConfig } from "astro/config"

// Astro integration imports
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import compressor from "astro-compressor"
import prefetch from "@astrojs/prefetch"
import node from "@astrojs/node"
import critters from "astro-critters"
import react from "@astrojs/react"

export default defineConfig({
  site: "https://astrojs.dev",
  experimental: {
    assets: true
  },
  image: {
    service: "astro/assets/services/sharp"
  },
  integrations: [
    tailwind({
      config: {
        path: "./tailwind.config.cjs"
      }
    }),
    prefetch(),
    react(),
    sitemap({
      lastmod: new Date(),
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          de: "de-DE",
          fr: "fr-FR",
          ro: "ro-RO",
          it: "it-IT"
        }
      }
    }),
    critters(),
    compress(),
    compressor()
  ],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
})
