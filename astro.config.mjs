import { defineConfig } from "astro/config"

// Astro integration imports
import tailwind from "@astrojs/tailwind"
import compress from "astro-compress"
import compressor from "astro-compressor"
import node from "@astrojs/node"
import critters from "astro-critters"
import react from "@astrojs/react"

export default defineConfig({
  experimental: {
    assets: true
  },
  integrations: [
    tailwind({
      config: {
        path: "./tailwind.config.cjs"
      }
    }),
    react(),
    critters(),
    compress(),
    compressor()
  ],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
})
