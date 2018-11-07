import React from 'react'
import {Text, Image, View} from "react-native";
import {Card, Button} from 'react-native-material-ui';

import styles from './styles'


export default function Badge({auctionType, id, imageUrl, viewersCount, currentMinPrice, currencySymbol, inboundId, outboundId}) {
  return (
    <Card key={id}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imageUrl}}/>
      </View>
      <View style={styles.boundContainer}>
        <Text style={styles.bound}>{inboundId} - {outboundId}</Text>
      </View>
      <Text style={styles.views}>{viewersCount} viewing this</Text>
      <View style={styles.buttonContainer}>
        <Button primary raised text={`Now From ${currentMinPrice} ${currencySymbol}`}/>
      </View>
    </Card>
  )
}
