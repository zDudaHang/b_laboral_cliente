import { StyleSheet, View } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { useGoogleAuth } from './src/hooks/UseGoogleAuth/useGoogleAuth'
import { Login } from './src/components/Login'
import { Home } from './src/components/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MarcarPresencaView } from './src/components/marcar-presenca/MarcarPresencaView'

WebBrowser.maybeCompleteAuthSession()

const Stack = createNativeStackNavigator()

export default function App() {
  const { isLoading, userInfo, promptAsync } = useGoogleAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo ? (
          <>
            <Stack.Screen name='Home'>{(props) => <Home {...props} userInfo={userInfo} />}</Stack.Screen>
            <Stack.Screen
              name='MarcarPresencas'
              component={MarcarPresencaView}
              options={{ title: 'Marcar presenças' }}
            />
          </>
        ) : (
          <Stack.Screen name='Login'>
            {(props) => <Login {...props} handlePress={promptAsync} isLoading={isLoading} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
