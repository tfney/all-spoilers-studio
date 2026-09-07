import { QuartzConfig } from "./quartz/cfg"
import ArticleTitle from "quartz-community-article-title" // <--- Add this import
import { QuartzConfig } from "./quartz/cfg"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "All Spoilers Studio",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "tfney.github.io/all-spoilers-studio",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
  header: "Inter",
  body: "Inter",
  code: "IBM Plex Mono",
},
      colors: {
        lightMode: {
          light: "#ff8200",
          lightgray: "#ff8200",
          gray: "#ff8200",
          darkgray: "#ff8200",
          dark: "#ff8200",
          secondary: "#ff8200",
          tertiary: "#ff8200",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#393639",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ff8200",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [ArticleTitle({
        font: "Inter", // <--- Pass your desired font here
      }),
      ],
    filters: [],
    emitters: [],
  },
}

export default config
