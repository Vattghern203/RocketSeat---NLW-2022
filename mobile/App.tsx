import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Button2(props: ButtonProps) {
  return (
    <TouchableOpacity>
        <Text>
          {props.title}
        </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, World</Text>
      
      <Button2 title='Send 1'/>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
