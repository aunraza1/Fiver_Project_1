import React from 'react'
import 
{
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image
}
from 'react-native'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faTrashAlt,faCopy} from '@fortawesome/free-regular-svg-icons'
import {faChevronLeft,faLock,faExclamationTriangle,faChevronDown,faSearch} from '@fortawesome/free-solid-svg-icons'
function Screen1(){
    return(
      <ScrollView style={styles.container}>
          <View style={{flexDirection:'row'}}>
              <View style={{justifyContent:'flex-start',flex:1}}>
                  <TouchableOpacity  style={{height:33.6,width:33.6,borderRadius:33.6/2,backgroundColor:'#E9EDF4',justifyContent:'center'}}>
         
                 <FontAwesomeIcon style={{alignSelf:'center', height:18 ,width:11}}  icon={faChevronLeft}/>
              
                </TouchableOpacity>
                
              </View>

              <View  style={{justifyContent:'flex-end',marginRight:10}}>
              <TouchableOpacity  style={{height:33.6,width:33.6,borderRadius:33.6/2,backgroundColor:'#E9EDF4',justifyContent:'center'}}>
         
         <FontAwesomeIcon style={{alignSelf:'center',}} size={15} icon={faLock}/>
      
        </TouchableOpacity>
                  </View>
                  <View  style={{justifyContent:'flex-end'}}>
              <TouchableOpacity  style={{height:33.6,width:33.6,borderRadius:33.6/2,backgroundColor:'#E9EDF4',justifyContent:'center'}}>
         
         <FontAwesomeIcon style={{alignSelf:'center',}} size={15} icon={faTrashAlt}/>
      
        </TouchableOpacity>
                  </View>
                      

          </View>
          <View style={{flexDirection:'row',marginTop:20}}>
              <View style={{justifyContent:'flex-start',flex:1}}>
                  <Text style={{fontFamily:'Manrope-Bold',fontSize:16,lineHeight:22}}>Cameron Williamson</Text>
                   <View style={{alignItems:'flex-start'}}>
                  <Text style={{fontFamily:"Inter-Thin",fontSize:14,lineHeight:24}} >Claimed <Text style={{color: '#2362FB',fontSize:14,lineHeight:24,fontFamily:"Inter-Thin Bold"}}> 0xc1912f...JSA59aE31 </Text> <TouchableOpacity>
                    <FontAwesomeIcon size={10} icon ={faCopy}/>
                  </TouchableOpacity>
                     
                  </Text>
                  </View>
                  
                  
                </View>

          
          <View style={{justifyContent:'flex-end'}}>
              <Image style={{height:42,width:42,borderRadius:21}} source={require('../assets/images/img1.jpg')}/>
              

          </View>
          </View>
          <View style={{height:110,borderRadius:8,borderWidth:2,borderColor:"#EB5757",padding:10,marginTop:20}}>
              <View style={{flexDirection:'row'}}>
                  <FontAwesomeIcon style={{marginTop:2,marginRight:5}} icon={faExclamationTriangle} color="#EB5757"/>
                  <Text style={{fontFamily:"Manrope-Bold",fontSize:16,lineHeight:22}}> Suspicious Activily Detected</Text>
              </View>
                <Text style={{fontFamily:"Inter-Thin",fontSize:15,lineHeight:24}}>Beneficiary may be involved in suspicious activity.</Text>

          </View>
          <View style={{flexDirection:'row',marginTop:20}}>
              <View style={{justifyContent:'flex-start',flex:1}}>
                  <TouchableOpacity style={{ justifyContent:'center', alignItems:'center', flexDirection:'row', width:169,height:36,backgroundColor:"#E9EDF4",borderRadius:46}} >
                      <Text style={{width:115,height:28,fontFamily:'Inter-Thin Bold',lineHeight:28,fontSize:15}}>All Transactions </Text>
                    <FontAwesomeIcon style={{opacity:0.7,height:12,width:7}}  icon={faChevronDown} />
                         
                  </TouchableOpacity>
             </View>
             <View style={{justifyContent:'flex-end',marginRight:5}}>
             
              <TouchableOpacity  style={{height:33.6,width:33.6,borderRadius:33.6/2,backgroundColor:'#E9EDF4',justifyContent:'center'}}>
         
         <FontAwesomeIcon style={{alignSelf:'center',}} size={15} icon={faSearch}/>
      
        </TouchableOpacity>
                  </View>
                  <View style={{justifyContent:'flex-end'}}>
             
             <TouchableOpacity  style={{height:33.6,width:33.6,borderRadius:33.6/2,backgroundColor:'#E9EDF4',justifyContent:'center'}}>
        
        <FontAwesomeIcon style={{alignSelf:'center',}} size={15} icon={faTrashAlt}/>
     
       </TouchableOpacity>
                 </View>
                 <View style={{justifyContent:'flex-end'}}>
             
             <TouchableOpacity  style={{height:33.6,width:33.6,borderRadius:33.6/2,backgroundColor:'#E9EDF4',justifyContent:'center'}}>
        
        <FontAwesomeIcon style={{alignSelf:'center',}} size={15} icon={faTrashAlt}/>
     
       </TouchableOpacity>
                 </View>
             </View>   
             <View style={{flexDirection:'row',marginTop:20}}>
              <View style={{justifyContent:'flex-start',flex:1}}>
                   <View style={{flexDirection:'row'}}>
                  <Text style={{fontFamily:'Manrope-Bold',fontSize:16,lineHeight:22}}>Sent</Text>
                  <FontAwesomeIcon size={13} style={{marginTop:4,marginLeft:5}} icon={faExclamationTriangle} color="#EB5757"/>

                  </View>
                   <View style={{alignItems:'flex-start'}}>
                  <Text style={{fontFamily:"Inter-Thin",fontSize:14,lineHeight:24}} >1 days ago <Text style={{color: '#2362FB',fontSize:14,lineHeight:24,fontFamily:"Inter-Thin Bold"}}> 0xc1912f...JSA59aE31 </Text> <TouchableOpacity>
                    <FontAwesomeIcon size={10} icon ={faCopy}/>
                  </TouchableOpacity>
                     
                  </Text>
                  </View>
                  
                  
                </View>
                <View style={{justifyContent:'flex-end'}}>
                    <Text style={{marginBottom:8}}>$3.5</Text>
                 </View>   
                </View>

          

      </ScrollView>
    )
}
export default Screen1