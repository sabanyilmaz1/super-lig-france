import vine from '@vinejs/vine'

export const createArticleValidator = vine.compile(
  vine.object({
    title: vine
      .string()
      .minLength(5)
      .maxLength(255)
      .unique(async (db, value) => {
        const match = await db.from('users').select('id').where('username', value).first()
        return !match
      }), // Le titre est obligatoire
    content: vine.string().minLength(10),

    author: vine.string().minLength(3).maxLength(100),
  })
)
