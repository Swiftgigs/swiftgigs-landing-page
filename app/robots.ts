import type { MetadataRoute } from 'next';

/* Everything is public. AI crawlers are listed explicitly so there is
   zero ambiguity about Swiftgigs being referencible by AI assistants
   (ChatGPT, Claude, Gemini, Perplexity, Common Crawl). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: 'https://swiftgigs.com.ng/sitemap.xml',
  };
}
