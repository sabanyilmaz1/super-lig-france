import redis from '@adonisjs/redis/services/main'
import { timeToSaveInRedis } from '../utils/catch-redis-time.js'

export class CacheService {
  public static async get(key: string): Promise<any | null> {
    const cachedData = await redis.get(key)
    return cachedData ?? null
  }

  public static async set(key: string, data: any): Promise<void> {
    const ttl = await timeToSaveInRedis()
    await redis.setex(key, ttl, JSON.stringify(data))
  }
}
