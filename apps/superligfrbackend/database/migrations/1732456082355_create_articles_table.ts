import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Articles extends BaseSchema {
  protected tableName = 'articles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Clé primaire auto-incrémentée
      table.string('title').notNullable() // Titre de l'article
      table.text('content').notNullable() // Contenu riche de l'article
      table.string('author').notNullable() // Auteur de l'article
      table.timestamp('created_at', { useTz: true }).notNullable() // Date de création
      table.timestamp('updated_at', { useTz: true }).nullable() // Date de mise à jour
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
