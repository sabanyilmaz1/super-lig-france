import { HttpContext } from '@adonisjs/core/http'
import Article from '../model/article.js'
import { HtmlSanitizer } from '../services/html_sanitizer.js'
import { createArticleValidator } from '../validators/create_article_validator.js'
import { AuthService } from '../../services/auth.js'

export default class ArticleController {
  /**
   * Liste tous les articles
   */
  public async index({ response, auth }: HttpContext) {
    const userConnected = await AuthService.getAuthenticatedUser(auth, response)
    if (!userConnected) return
    const articles = await Article.all()
    return response.ok(articles)
  }

  /**
   * Affiche un article spécifique
   */
  public async show({ params, response, auth }: HttpContext) {
    const userConnected = await AuthService.getAuthenticatedUser(auth, response)
    if (!userConnected) return
    const article = await Article.find(params.id)

    if (!article) {
      return response.notFound({ message: 'Article not found' })
    }

    return response.ok(article)
  }

  /**
   * Crée un nouvel article
   */
  public async store({ request, response, auth }: HttpContext) {
    const userConnected = await AuthService.getAuthenticatedUser(auth, response)
    if (!userConnected) return
    // const data = request.only(['title', 'content', 'author'])
    const data = await request.validateUsing(createArticleValidator)

    data.content = await HtmlSanitizer.sanitize(data.content)

    const article = await Article.create(data)

    return response.created(article)
  }

  /**
   * Met à jour un article existant
   */
  public async update({ params, request, response, auth }: HttpContext) {
    const userConnected = await AuthService.getAuthenticatedUser(auth, response)
    if (!userConnected) return
    const article = await Article.find(params.id)

    if (!article) {
      return response.notFound({ message: 'Article not found' })
    }

    const data = await request.validateUsing(createArticleValidator)

    data.content = await HtmlSanitizer.sanitize(data.content)

    article.merge(data)
    await article.save()

    return response.ok(article)
  }

  /**
   * Supprime un article
   */
  public async destroy({ params, response, auth }: HttpContext) {
    const userConnected = await AuthService.getAuthenticatedUser(auth, response)
    if (!userConnected) return
    const article = await Article.find(params.id)
    if (!article) {
      return response.notFound({ message: 'Article not found' })
    }

    await article.delete()
    return response.noContent()
  }
}
