import React from "react";
import { View, Text, Image } from "react-native"
import BatchedBridge from "react-native/Libraries/BatchedBridge/BatchedBridge";
import styles from "./styles"; 

export default function QuotationItems(props){
    return(
        <View style={styles.mainContent}>
         <View style={styles.contextLeft}> 
            <View style={styles.boxLogo}>
              <Image
              style={styles.logoBitcoin}
              source={require("../../../img/bitcoin.png")}
              />
              <Text style={styles.dayQuotation}>{props.data}</Text>
            </View>
         </View>
         <View style={styles.contextRight}>
           <Text style={styles.price}>{props.valor}</Text>
         </View>
        </View>
    )
}