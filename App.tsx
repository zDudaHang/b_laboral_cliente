import { StyleSheet, View } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import { useGoogleAuth } from './src/hooks/UseGoogleAuth/useGoogleAuth'
import { Login } from './src/components/Login'
import { Home } from './src/components/Home'

WebBrowser.maybeCompleteAuthSession()

export default function App() {
  const { isLoading, userInfo, promptAsync } = useGoogleAuth()

  return (
    <View style={styles.container}>
      {!userInfo ? <Login handlePress={promptAsync} isLoading={isLoading} /> : <Home userInfo={userInfo} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
