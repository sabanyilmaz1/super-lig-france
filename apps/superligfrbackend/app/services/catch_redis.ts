import redis from '@adonisjs/redis/services/main'
import { getTTL } from '../match_window/services/match_windows.js'

export class CacheService {
  public static async get(key: string): Promise<any | null> {
    const cachedData = await redis.get(key)
    return cachedData ?? null
  }

  public static async set(key: string, data: any): Promise<void> {
    let ttl = await getTTL()

    if (key.includes('fixture:') && key !== 'fixture:last') {
      ttl = 300
    }

    await redis.setex(key, ttl, JSON.stringify(data))
  }
}
