import React from 'react'
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,

}
  from 'react-native'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrashAlt, faCopy } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft, faLock, faExclamationTriangle, faChevronDown, faSearch, faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons'

function Screen1() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.topIconLeft}>
          <TouchableOpacity style={styles.btnBackContainer}>
            <FontAwesomeIcon style={styles.backIcon} icon={faChevronLeft} />
          </TouchableOpacity>
        </View>

        <View style={styles.topIconRight}>
          <TouchableOpacity style={styles.btnBackContainer}>

            <FontAwesomeIcon style={styles.center} size={15} icon={faLock} />

          </TouchableOpacity>
        </View>
        <View style={styles.end}>
          <TouchableOpacity style={styles.btnBackContainer}>

            <FontAwesomeIcon style={styles.center} size={15} icon={faTrashAlt} />

          </TouchableOpacity>
        </View>


      </View>
      <View style={styles.subContainer}>
        <View style={styles.topIconLeft}>
          <Text style={styles.textStyle1}>Cameron Williamson</Text>
          <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text style={styles.textStyle2} >$25 Claimed <Text style={{ color: '#2362FB', fontSize: 14, lineHeight: 24, fontFamily: "Inter-Thin Bold" }}> 0xc1912f...JSA59aE31 </Text>
              <TouchableOpacity>
                <FontAwesomeIcon size={20} icon={faCopy} />
              </TouchableOpacity>

            </Text>
          </View>


        </View>


        <View style={styles.end}>
          <Image style={styles.avatar} source={require('../assets/images/img1.jpg')} />


        </View>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.row}>
          <FontAwesomeIcon style={{ marginTop: 2, marginRight: 5 }} icon={faExclamationTriangle} color="#EB5757" />
          <Text style={styles.textStyle1}> Suspicious Activily Detected</Text>
        </View>
        <Text style={styles.boxTxt}>Beneficiary may be involved in suspicious activity.</Text>

      </View>
      <View style={styles.subContainer}>
        <View style={styles.topIconLeft}>
          <TouchableOpacity style={styles.btn} >
            <Text style={styles.btnTxt}>All Transactions </Text>
            <FontAwesomeIcon style={{ opacity: 0.7, height: 12, width: 7 }} icon={faChevronDown} />

          </TouchableOpacity>
        </View>
        <View style={[styles.end, { marginRight: 5 }]}>

          <TouchableOpacity style={styles.btnBackContainer}>

            <FontAwesomeIcon style={{ alignSelf: 'center', }} size={15} icon={faSearch} />

          </TouchableOpacity>
        </View>
        <View style={[styles.end, { marginRight: 5 }]}>

          <TouchableOpacity style={styles.btnBackContainer}>

            <FontAwesomeIcon style={{ alignSelf: 'center', }} size={15} icon={faSortAmountUpAlt} />

          </TouchableOpacity>
        </View>
        <View style={styles.end}>

          <TouchableOpacity style={styles.btnBackContainer}>

            <Image style={{ height: 20, width: 20, alignSelf: 'center' }} source={require('../assets/images/img2.jpg')} />

          </TouchableOpacity>
        </View>
      </View>
      <View style={{ padding: 8 }}>
        <View style={styles.subContainer}>
          <View style={styles.topIconLeft}>
            <View style={styles.row}>
              <Text style={styles.textStyle1}>Sent</Text>
              <FontAwesomeIcon size={13} style={{ marginTop: 4, marginLeft: 5 }} icon={faExclamationTriangle} color="#EB5757" />

            </View>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Text style={styles.textStyle2} >1 days ago. <Text style={{ color: '#2362FB', fontSize: 14, lineHeight: 24, fontFamily: "Inter-Thin Bold" }}> 0xc1912f...JSA59aE31 </Text> <TouchableOpacity>
                <FontAwesomeIcon size={20} icon={faCopy} />
              </TouchableOpacity>

              </Text>
            </View>


          </View>
          <View style={styles.end}>
            <Text style={styles.textStyle1}>$3.5</Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={[styles.container, { padding: 0 }]}>
            <View style={styles.row}>
              <Text style={styles.textStyle1}>Received</Text>


            </View>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Text style={styles.textStyle2} >4 days ago. <Text style={styles.textStyle3}> 0xc1912f...JSA59aE31 </Text> <TouchableOpacity>
                <FontAwesomeIcon size={20} icon={faCopy} />
              </TouchableOpacity>

              </Text>
            </View>


          </View>
          <View style={styles.end}>
            <Text style={styles.textStyle1}>$2</Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={[styles.container, { padding: 0 }]}>
            <View style={styles.row}>
              <Text style={styles.textStyle1}>Claimed</Text>


            </View>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Text style={styles.textStyle2} >3 day ago.</Text>
            </View>


          </View>
          <View style={styles.end}>
            <Text style={styles.textStyle1}>$0.5</Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.topIconLeft}>
            <View style={styles.row}>
              <Text style={styles.textStyle1}>Claimed</Text>


            </View>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Text style={styles.textStyle2} >3 day ago.</Text>
            </View>


          </View>
          <View style={styles.end}>
            <Text style={styles.textStyle1}>$0.5</Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.topIconLeft}>
            <View style={styles.row}>
              <Text style={styles.textStyle1}>Joined Community</Text>


            </View>
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Text style={styles.textStyle2} >6 days ago. Added by Afonso Barbosa</Text>
            </View>


          </View>
        </View>
      </View>


    </ScrollView>
  )
}
export default Screen1