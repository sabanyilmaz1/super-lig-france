import vine from '@vinejs/vine'

const password = vine.string().minLength(8)

export const registerValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const match = await db.from('users').select('id').where('email', value).first()
        return !match
      }),
    password,
    username: vine
      .string()
      .minLength(3)
      .maxLength(20)
      .unique(async (db, value) => {
        const match = await db.from('users').select('id').where('username', value).first()
        return !match
      }),
    api_football_key: vine
      .string()
      .minLength(3)
      .maxLength(40)
      .unique(async (db, value) => {
        const match = await db.from('users').select('id').where('api_football_key', value).first()
        return !match
      }),
    team_favorite_api_id: vine.number(),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password,
  })
)
