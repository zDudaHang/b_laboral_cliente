import { UserInfo } from '../hooks/UseGoogleAuth/model'
import { Text, View, Image } from 'react-native'

interface HomeProps {
  userInfo: UserInfo
}

export function Home(props: HomeProps) {
  const { userInfo } = props

  console.log(userInfo.picture)

  return (
    <View>
      <Text>Olá, {userInfo.name}</Text>
      <Image source={{ uri: userInfo.picture }} style={{ width: 96, height: 96 }} />
    </View>
  )
}
