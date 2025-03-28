import { DateTime } from 'luxon'
import MatchWindow from '../model/match_window.js'

export async function isInMatchWindow(): Promise<boolean> {
  const now = DateTime.now()

  const activeWindow = await MatchWindow.query()
    .where('start_time', '<=', now.toSQL())
    .andWhere('end_time', '>=', now.toSQL())
    .first()

  return !!activeWindow
}

export async function getNextMatchWindow(): Promise<DateTime | null> {
  const now = DateTime.now()
  const nextWindow = await MatchWindow.query()
    .where('start_time', '>', now.toSQL())
    .orderBy('start_time', 'asc')
    .first()

  if (!nextWindow) {
    return null
  }

  const startTime =
    nextWindow.start_time instanceof DateTime
      ? nextWindow.start_time
      : DateTime.fromJSDate(nextWindow.start_time)

  return startTime
}
export async function getTTL(): Promise<number> {
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
