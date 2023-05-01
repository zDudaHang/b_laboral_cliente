import { Bridger } from './model'
import { ListItem, Avatar } from 'react-native-elements'
import { useState } from 'react'

interface PresencaBridgerProps {
  bridger: Bridger
  onClick: (isPresente: boolean, uuid: string) => void
}

export function PresencaBridger(props: PresencaBridgerProps) {
  const {
    bridger: { nomeCompleto, uriFoto, uuid },
    onClick,
  } = props

  const [isPresente, setIsPresente] = useState<boolean>(false)

  const handlePress = () => {
    onClick(!isPresente, uuid)
    setIsPresente(!isPresente)
  }

  return (
    <ListItem bottomDivider>
      <Avatar rounded source={{ uri: uriFoto }} size='large' />
      <ListItem.Content>
        <ListItem.Title>{nomeCompleto}</ListItem.Title>
        <ListItem.Subtitle>{isPresente ? 'Presente' : 'Faltou'}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.CheckBox
        iconType='material-community'
        checkedIcon='checkbox-marked'
        uncheckedIcon='checkbox-blank-outline'
        checked={isPresente}
        onPress={handlePress}
        size={32}
      />
    </ListItem>
  )
}
