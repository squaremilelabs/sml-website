import "tsconfig-paths/register"
import { nextui } from "@nextui-org/react"
import { Config as TailwindConfig } from "tailwindcss"
import tailwindContainerQueryPlugin from "@tailwindcss/container-queries"

const tailwindConfig: TailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border|divide)-(default|primary|secondary|danger|warning|success|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuschia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /(w|max-w|min-w)-(wxs|wsm|wmd|wlg|wxl)/,
    },
  ],
  theme: {
    screens: {
      xs: "288px",
      sm: "576px",
      md: "864px",
      lg: "1152px",
      xl: "1440px",
    },
    containers: {
      wxs: "288px",
      wsm: "576px",
      wmd: "864px",
      wlg: "1152px",
      wxl: "1440px",
    },
    extend: {
      colors: {
        black: "#282C35",
      },
      borderRadius: {
        sm: "4px",
        md: "4px",
        DEFAULT: "4px",
        lg: "8px",
      },
      spacing: {
        wxs: "288px",
        wsm: "576px",
        wmd: "864px",
        wlg: "1152px",
        wxl: "1440px",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [
    tailwindContainerQueryPlugin,
    nextui({
      addCommonColors: true,
      layout: {
        radius: {
          small: "4px",
          medium: "4px",
          large: "4px",
        },
        borderWidth: {
          small: "1px",
          medium: "1px",
          large: "1px",
        },
      },
      themes: {
        light: {
          extend: "light",
          colors: {
            background: "#f8fafc",
            foreground: "#0f172a",
            primary: {
              "50": "#faf9ec",
              "100": "#f4f0cd",
              "200": "#ebdf9d",
              "300": "#dfc865",
              "400": "#d4af37",
              "500": "#c59b2d",
              "600": "#aa7a24",
              "700": "#885920",
              "800": "#724921",
              "900": "#623e21",
              "DEFAULT": "#c59b2d",
            },
            secondary: {
              "50": "#f3f7fc",
              "100": "#e7f0f7",
              "200": "#c9dfee",
              "300": "#9ac5df",
              "400": "#64a6cc",
              "500": "#418bb6",
              "600": "#2f6f9a",
              "700": "#27597d",
              "800": "#244c68",
              "900": "#234157",
              "DEFAULT": "#418bb6",
            },
            danger: {
              "50": "#fef2f2",
              "100": "#fee2e2",
              "200": "#fecaca",
              "300": "#fca5a5",
              "400": "#f87171",
              "500": "#ef4444",
              "600": "#dc2626",
              "700": "#b91c1c",
              "800": "#991b1b",
              "900": "#7f1d1d",
              "DEFAULT": "#ef4444",
            },
          },
        },
        dark: {
          extend: "dark",
          colors: {
            background: "#0f172a",
            foreground: "#f1f5f9",
            primary: {
              "50": "#382010",
              "100": "#623e21",
              "200": "#724921",
              "300": "#885920",
              "400": "#aa7a24",
              "500": "#c59b2d",
              "600": "#d4af37",
              "700": "#dfc865",
              "800": "#ebdf9d",
              "900": "#f4f0cd",
              "DEFAULT": "#c59b2d",
            },
            secondary: {
              "50": "#172a3a",
              "100": "#234157",
              "200": "#244c68",
              "300": "#27597d",
              "400": "#2f6f9a",
              "500": "#418bb6",
              "600": "#64a6cc",
              "700": "#9ac5df",
              "800": "#c9dfee",
              "900": "#e7f0f7",
              "DEFAULT": "#418bb6",
            },
            danger: {
              "50": "#450a0a",
              "100": "#7f1d1d",
              "200": "#991b1b",
              "300": "#b91c1c",
              "400": "#dc2626",
              "500": "#ef4444",
              "600": "#f87171",
              "700": "#fca5a5",
              "800": "#fecaca",
              "900": "#fee2e2",
              "DEFAULT": "#ef4444",
            },
          },
          layout: {
            // boxShadow: {
            //   // shadow-small
            //   small:
            //     "0px 0px 5px 0px rgb(2 6 23 / 0.05), 0px 2px 10px 0px rgb(2 6 23 / 0.2), inset 0px 0px 1px 0px rgb(71 85 105 / 0.15)",
            //   // shadow-medium
            //   medium:
            //     "0px 0px 15px 0px rgb(2 6 23 / 0.06), 0px 2px 30px 0px rgb(2 6 23 / 0.22), inset 0px 0px 1px 0px rgb(71 85 105 / 0.15)",
            //   // shadow-large
            //   large:
            //     "0px 0px 30px 0px rgb(2 6 23 / 0.07), 0px 30px 60px 0px rgb(2 6 23 / 0.26), inset 0px 0px 1px 0px rgb(71 85 105 / 0.15)",
            // },
          },
        },
      },
    }),
  ],
}

export default tailwindConfig
