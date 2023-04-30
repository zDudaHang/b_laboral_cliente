import { REACT_APP_SERVER } from '@env'

// TODO: Adicionar o token para autenticar com o servidor depois
export function fetchWithAuth(url: string, options: RequestInit = {}): Promise<Response> {
  return fetch(`${REACT_APP_SERVER}/${url}`, { ...options })
}
