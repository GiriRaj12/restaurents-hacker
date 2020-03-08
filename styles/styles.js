import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  appbackground :{
      flex: 1,
      backgroundColor:'white',
      position:'relative'
    },
  cardView :{
      borderRadius:5,
      height:130,
      width:"80%",
      marginLeft:40,
      backgroundColor:"seashell",
      marginBottom:20,
      marginTop:20,
  },
  brandName:{
      fontSize:40,
      fontWeight:'bold'
  },
  splitContainer:{
      flex:1,
      flexDirection:"row",

  },
  splitInnerView:{
      width:100,
      height:40,
  }
  });

  export default styles;