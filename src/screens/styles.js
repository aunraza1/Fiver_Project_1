import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        backgroundColor:'#FFFFFF',
        padding:10
    },
    row:{
        flexDirection:'row'
    },
    topIconLeft:{
        justifyContent:'flex-start',flex:1
    },
    btnBackContainer:{
        height:33.6,
        width:33.6,
        borderRadius:33.6/2,
        backgroundColor:'#E9EDF4',
        justifyContent:'center'
    },
    backIcon:{
        alignSelf:'center',
         height:18
         ,width:11
    }
    ,topIconRight:{
        justifyContent:'flex-end'
        ,marginRight:10
    },
    center:{
        alignSelf:'center'

    },
    end:{
        justifyContent:'flex-end'
    },
    subContainer:{
        flexDirection:'row'
        ,marginTop:20
    },
    textStyle1:{
        fontFamily:'Manrope-Bold'
        ,fontSize:16,
        lineHeight:22

    },
    textStyle2:{
        fontFamily:'Inter-Thin'
        ,fontSize:14,
        lineHeight:24

    },
    textStyle3:{
        color: '#2362FB'
        ,fontSize:14,
        lineHeight:24,
        fontFamily:"Inter-Thin Bold"
    },
    boxContainer:{
        height:110,
        borderRadius:8,
        borderWidth:2,
        borderColor:"#EB5757",
        padding:10,
        marginTop:20
    },
    avatar:{
        height:42,
        width:42,
        borderRadius:21
    },boxTxt:{
        fontFamily:"Inter-Thin Bold",
        fontSize:15,
        lineHeight:24
    },btnTxt:{
        width:115,
        height:28,
        fontFamily:'Inter-Thin Bold',
        lineHeight:28,
        fontSize:15
    },
    btn:{
        justifyContent:'center',
         alignItems:'center',
          flexDirection:'row',
           width:169,
           height:36,
           backgroundColor:"#E9EDF4",
           borderRadius:46
    }
    

})
export default styles