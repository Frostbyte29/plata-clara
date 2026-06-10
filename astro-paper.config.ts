import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://plata-clara.pages.dev/",
    title: "Plata Clara",
    description: "Finanzas personales y tributario para peruanos. Guías prácticas sobre impuestos, ahorro e inversión en Perú.",
    author: "Plata Clara",
    profile: "https://plata-clara.pages.dev/",
    ogImage: "default-og.jpg",
    lang: "es",
    timezone: "America/Lima",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=Ver%20este%20artículo&body=" },
  ],
});
