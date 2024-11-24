import { unified } from 'unified'
import rehypeSanitize from 'rehype-sanitize'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'

export class HtmlSanitizer {
  public static async sanitize(htmlContent: string): Promise<string> {
    const sanitized = await unified()
      .use(rehypeParse, { fragment: true }) // Parse le HTML brut
      .use(rehypeSanitize) // Nettoie le contenu HTML
      .use(rehypeStringify) // Reconvertit en HTML string
      .process(htmlContent)

    return String(sanitized)
  }
}
