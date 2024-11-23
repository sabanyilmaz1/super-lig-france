import redis from '@adonisjs/redis/services/main'
import { getTTL } from '../utils/match-windows.js'

export class CacheService {
  public static async get(key: string): Promise<any | null> {
    const cachedData = await redis.get(key)
    return cachedData ?? null
  }

  public static async set(key: string, data: any): Promise<void> {
    const ttl = await getTTL()
    await redis.setex(key, ttl, JSON.stringify(data))
  }
}
