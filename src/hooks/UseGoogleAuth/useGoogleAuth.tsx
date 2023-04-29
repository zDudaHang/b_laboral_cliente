import { useAuthRequest } from 'expo-auth-session/providers/google'
import { REACT_APP_GOOGLE_WEB_CLIENT_ID } from '@env'
import { useEffect, useState } from 'react'
import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session'
import { UserInfo } from './model'

interface UseGoogleAuthResult {
  isLoading: boolean
  userInfo: UserInfo | null
  promptAsync: (options?: AuthRequestPromptOptions) => Promise<AuthSessionResult>
}

export function useGoogleAuth(): UseGoogleAuthResult {
  const [request, response, promptAsync] = useAuthRequest({
    webClientId: REACT_APP_GOOGLE_WEB_CLIENT_ID,
  })

  const [token, setToken] = useState<string>('')
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  useEffect(() => {
    if (response && response.type === 'success' && response.authentication) {
      setToken(response.authentication.accessToken)
      getUserInfo()
    }
  }, [response, token])

  const getUserInfo = async () => {
    if (token) {
      try {
        const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${token}` },
        })

        const user = await response.json()
        setUserInfo(user)
      } catch (error) {
        console.error(error)
      }
    }
  }

  return {
    isLoading: !request,
    userInfo,
    promptAsync,
  }
}
