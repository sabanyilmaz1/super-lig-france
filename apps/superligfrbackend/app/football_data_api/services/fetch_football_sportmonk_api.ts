import env from '#start/env'
export async function fetchFootballSportmonkApi(
  endpoint: string,
  params: string
): Promise<Response> {
  const apiKey = env.get('API_FOOTBALL_KEY')
  const baseUrl = 'https://api.sportmonks.com/v3/football'
  const urlWithToken = `${baseUrl}${endpoint}?api_token=${apiKey}&${params}`
  const headers = new Headers({
    'Content-Type': 'application/json',
  })

  const config: RequestInit = {
    method: 'GET',
    headers,
  }

  try {
    const response = await fetch(urlWithToken, config)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
