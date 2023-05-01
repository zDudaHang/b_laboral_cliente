import { useEffect, useState } from 'react'
import { FlatList, View, StyleSheet, Alert } from 'react-native'
import { fetchWithAuth } from '../../utils/fetch'
import { Bridger } from './model'
import { PresencaBridger } from './PresencaBridger'
import { Button } from 'react-native-elements'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/model'

type NavigationProp = NativeStackScreenProps<RootStackParamList, 'MarcarPresencas'>['navigation']

interface MarcarPresencaViewProps {
  navigation: NavigationProp
}

export function MarcarPresencaView(props: MarcarPresencaViewProps) {
  const { navigation } = props

  const [bridgers, setBridgers] = useState<Bridger[]>([])

  useEffect(() => {
    fetchWithAuth('bridgers', { method: 'GET' }).then((response) => {
      response.json().then(setBridgers)
    })
  }, [])

  let uuidBridgersPresentes: string[] = []

  const handleClick = (isPresente: boolean, uuid: string) => {
    if (isPresente) uuidBridgersPresentes.push(uuid)
    else uuidBridgersPresentes = uuidBridgersPresentes.filter((uuidPresente) => uuidPresente !== uuid)
  }

  const handleSubmit = () => {
    if (uuidBridgersPresentes.length > 0)
      fetchWithAuth('presencas', {
        method: 'POST',
        body: JSON.stringify(uuidBridgersPresentes),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(console.log)
    navigation.goBack()
    Alert.alert('Presença marcada com sucesso !')
  }

  return (
    <View>
      <FlatList<Bridger>
        data={bridgers}
        renderItem={({ item }) => <PresencaBridger bridger={item} onClick={handleClick} />}
      />
      <Button
        title='Salvar'
        type='solid'
        icon={{
          name: 'check',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        containerStyle={styles.botaoSalvar}
        onPress={handleSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  botaoSalvar: {
    marginTop: '1rem',
  },
})
