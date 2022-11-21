import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps {
  
}

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo
      
        label='Nome'
        value='Pedro Pedroso'

      />

    <DuoInfo
      
      label='Nome'
      value='Javier Buenas Ondas'

    />

    <DuoInfo
      
      label='Nome'
      value='Javier Buenas Ondas'

    />

    <DuoInfo
      
      label='Nome'
      value='Javier Buenas Ondas'
      colorValue="violet"

    />
    </View>
  );
}