import { useEffect, useState} from 'react'
import { TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

import logoImg from 'mobile/src/assets/logo-nlw-esports.png';

import { GameParams } from '../../@types/navigation';

import { Background } from '../../components/Background';
import { DuoCard } from '../../components/DuoCard';
import { Heading } from '../../components/Heading';

import { THEME } from '../../theme';
import { styles } from './styles';

export function Game() {

  const [duos, setDuos] = useState([])

  const navigation = useNavigation()
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack () {
    navigation.goBack()
  }

  useEffect(() => {
    fetch(`http://192.168.1.127:3333/games/${game.id}/ads`)
    .then(reponse => reponse.json())
    .then(data => {
      console.log(data)
    })
  }, []);

  console.log(game)

  return (
    <Background>
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>

          <TouchableOpacity onPress={handleGoBack}>

            <Entypo 

              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            
            />

          </TouchableOpacity>

          <Image 
          
            source={logoImg}
            style={styles.logo}

          />

          <View style={styles.right} />
            
        </View>

        <Image

          source={{uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode='cover'

        />

        <Heading
        
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        
        />

        <DuoCard



        />

      </SafeAreaView>
    </Background>
  );
}