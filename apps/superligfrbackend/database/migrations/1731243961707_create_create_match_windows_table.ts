import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'match_windows'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamp('start_time').notNullable()
      table.timestamp('end_time').notNullable()
      table.timestamps(true, true) // created_at et updated_at
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
