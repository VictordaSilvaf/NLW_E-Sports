import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
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
      <Text>O pai ta on!!</Text>
      <Button title='Seguir' />
      <StatusBar style="auto" backgroundColor='pink'/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
