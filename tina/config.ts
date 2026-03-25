import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  branch: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || "main",
  media: {
    tina: {
      mediaRoot: "public/images",
      publicFolder: "images",
    },
  },
  schema: {
    collections: [
      {
        name: "blog_en",
        label: "Blog (English)",
        path: "blog-posts/en",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "datetime", name: "date", label: "Date", required: true },
          { type: "string", name: "author", label: "Author", default: "House Plus Ltd Team" },
          { type: "string", name: "category", label: "Category", default: "News" },
          { type: "string", name: "readTime", label: "Read Time", default: "3 min read" },
          { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" } },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      {
        name: "blog_fr",
        label: "Blog (Français)",
        path: "blog-posts/fr",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "datetime", name: "date", label: "Date", required: true },
          { type: "string", name: "author", label: "Author", default: "Équipe House Plus Ltd" },
          { type: "string", name: "category", label: "Category", default: "Actualités" },
          { type: "string", name: "readTime", label: "Read Time", default: "3 min de lecture" },
          { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" } },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      {
        name: "blog_es",
        label: "Blog (Español)",
        path: "blog-posts/es",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "datetime", name: "date", label: "Date", required: true },
          { type: "string", name: "author", label: "Author", default: "Equipo House Plus Ltd" },
          { type: "string", name: "category", label: "Category", default: "Noticias" },
          { type: "string", name: "readTime", label: "Read Time", default: "3 min de lectura" },
          { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" } },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      {
        name: "blog_ar",
        label: "Blog (العربية)",
        path: "blog-posts/ar",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "datetime", name: "date", label: "Date", required: true },
          { type: "string", name: "author", label: "Author", default: "فريق هاوس بلس المحدودة" },
          { type: "string", name: "category", label: "Category", default: "أخبار" },
          { type: "string", name: "readTime", label: "Read Time", default: "٣ دقائق قراءة" },
          { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" } },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
      {
        name: "settings",
        label: "Site Settings",
        path: "data/settings",
        format: "json",
        fields: [
          {
            type: "object",
            name: "contact",
            label: "Contact Info",
            fields: [
              { type: "string", name: "email", label: "Email", default: "jack@houseplus-ch.com" },
              { type: "string", name: "phone", label: "Phone", default: "+86 15578119543" },
              { type: "string", name: "address", label: "Address", default: "Industrial Park, Foshan City, Guangdong, China" },
            ],
          },
        ],
      },
    ],
  },
});
