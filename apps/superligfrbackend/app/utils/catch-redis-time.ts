import { DateTime } from 'luxon'
import { getNextMatchWindow, isInMatchWindow } from './match-windows.js'

export async function timeToSaveInRedis(): Promise<number> {
  const now = DateTime.now()

  if (await isInMatchWindow()) {
    return 180
  }
  const nextMatchWindow = await getNextMatchWindow()

  if (nextMatchWindow) {
    const secondsUntilNextMatch = Math.round(nextMatchWindow.diff(now, 'seconds').seconds)
    // Si le prochain match est dans moins d'un jour, retourne ce temps, sinon 24h (86400 secondes)
    return secondsUntilNextMatch < 86400 ? secondsUntilNextMatch : 86400
  }

  return 86400
}
