import { Image, View, StyleSheet } from 'react-native'
import { Bridger } from './model'
import FontAwesome from '@expo/vector-icons/FontAwesome'

interface PresencaBridgerProps {
  bridger: Bridger
}

export function PresencaBridger(props: PresencaBridgerProps) {
  const {
    bridger: { nomeCompleto, uriFoto },
  } = props

  return (
    <View style={styles.container}>
      <Image source={{ uri: uriFoto }} style={styles.picture} />
      <strong>{nomeCompleto}</strong>
      <FontAwesome.Button name='check-circle' onPress={() => console.log('presente!')}>
        Presente
      </FontAwesome.Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffff',
    alignItems: 'center',
    rowGap: 2,
    padding: '1rem',
  },
  picture: {
    width: 96,
    height: 96,
    borderRadius: 50,
  },
})
