import {View,Text,StyleSheet} from 'react-native';

export default function App(){
 return(
  <View style={styles.container}>
    <Text style={styles.texto}>nicolle</Text>
  </View>
 );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#85c1dcff'
  },
  texto:{
    fontSize: 32,
    fontWeight: 'bold'
      
    }
  }
);
   

  
