import { View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

interface LoginProps {
  isLoading: boolean
  handlePress: () => void
}

export function Login(props: LoginProps) {
  const { handlePress, isLoading } = props
  return (
    <View>
      <FontAwesome.Button name='google' disabled={isLoading} onPress={handlePress}>
        Login com Google
      </FontAwesome.Button>
    </View>
  )
}
