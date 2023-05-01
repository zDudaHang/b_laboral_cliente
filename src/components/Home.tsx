import { UserInfo } from '../hooks/UseGoogleAuth/model'
import { Text, View, Image } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from './navigation/model'
import FontAwesome from '@expo/vector-icons/build/FontAwesome'

type NavigationProp = NativeStackScreenProps<RootStackParamList, 'Home'>['navigation']

interface HomeProps {
  userInfo: UserInfo
  navigation: NavigationProp
}

export function Home(props: HomeProps) {
  const { userInfo, navigation } = props

  const handlePress = () => navigation.navigate('MarcarPresencas')

  return (
    <View>
      <Text>{userInfo?.name}</Text>
      <Image source={{ uri: userInfo.picture }} style={{ width: 96, height: 96 }} />
      <FontAwesome.Button name='calendar-check-o' onPress={handlePress}>
        Marcar presenças
      </FontAwesome.Button>
    </View>
  )
}
