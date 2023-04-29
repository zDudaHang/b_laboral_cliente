import { Text, View, Button } from 'react-native'

interface LoginProps {
  isLoading: boolean
  handlePress: () => void
}

export function Login(props: LoginProps) {
  const { handlePress, isLoading } = props
  return (
    <View>
      <Text>Login</Text>
      <Button title='Sign in with Google' disabled={isLoading} onPress={handlePress} />
    </View>
  )
}
