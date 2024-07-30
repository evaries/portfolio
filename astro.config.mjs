import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  image: {
    // https://docs.astro.build/en/guides/assets/#using-sharp
    service: sharpImageService()
  }
});