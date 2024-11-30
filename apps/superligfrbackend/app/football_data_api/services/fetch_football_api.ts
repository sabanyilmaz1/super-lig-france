export async function apiFoot(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  endpoint: string,
  apiKey: string,
  body: Record<string, unknown> | null = null
): Promise<Response> {
  const baseUrl = 'https://v3.football.api-sports.io'
  const url = `${baseUrl}/${endpoint}`

  // Création des en-têtes en utilisant l'objet Headers pour gérer les en-têtes dynamiques
  const headers = new Headers({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': apiKey,
  })

  // Ajouter Content-Type si un body est présent et que la méthode est POST, PUT, ou PATCH
  if (body && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    headers.append('Content-Type', 'application/json')
    headers.append('charset', 'utf-8')
    headers.append('Accept', 'charset=utf-8')
  }

  const options: RequestInit = {
    method,
    headers,
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  try {
    const response = await fetch(url, options)
    if (!response.ok) throw new Error(`Error: ${response.statusText}`)
    return response
  } catch (error) {
    console.error('API Request Error:', error)
    throw error
  }
}
