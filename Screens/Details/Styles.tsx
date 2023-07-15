import { StyleSheet } from 'react-native';
export default  StyleSheet.create({
    topView:{display:"flex",flexDirection:"row",alignItems:"center",width:350,paddingLeft:20,paddingTop:50},
    backButton:{width:50,height:50,borderRadius:50,backgroundColor:"#eee",
    display:"flex"
     ,alignItems:"center"
     ,justifyContent:"center"
     ,borderColor:"#ccc"
     ,borderWidth:1,
     marginRight:20},
     stockSymbol:{fontSize:18,fontWeight:"bold"},
     stockName:{color:"#ccc"},
     box:{marginBottom:50,paddingLeft:20},
     stockPrice:{marginTop:20,fontSize:40,fontWeight:"bold",marginBottom:10},
     containerBox:{marginBottom:20,display:"flex",flexDirection:"row",justifyContent:"space-between",paddingLeft:20,paddingRight:20},
     title:{fontSize:18},
     price:{fontWeight:"bold",fontSize:18},
     addButton:{width:370,padding:20,borderRadius:20,backgroundColor:"black",marginLeft:20 },
     buttonText:{color:"white",textAlign:"center"},
    red: {
      color:"#f9a1a1"
   
    },
    blue:{
        color:"#679b9c"
    }
  })