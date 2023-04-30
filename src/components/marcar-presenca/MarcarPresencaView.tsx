import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { fetchWithAuth } from '../../utils/fetch'
import { Bridger } from './model'
import { PresencaBridger } from './PresencaBridger'

interface MarcarPresencaViewProps {}

export function MarcarPresencaView(props: MarcarPresencaViewProps) {
  const [bridgers, setBridgers] = useState<Bridger[]>([])

  useEffect(() => {
    fetchWithAuth('bridgers', { method: 'GET' }).then((response) => {
      response.json().then(setBridgers)
    })
  }, [])

  return (
    <FlatList<Bridger>
      data={bridgers}
      style={{ margin: '1rem' }}
      renderItem={({ item }) => <PresencaBridger bridger={item} />}
    />
  )
}
