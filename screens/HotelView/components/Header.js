import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { gs } from '../../../styles';

export default function components() {
  return (
    <View>
        <Image source={require("../../../assets/Hotel.jpg")} style={{width: "100%", height: 300}} />

        <View style={styles.topButtons}>
          <AntDesign name="close" size={24} color="#fff" />

          <View style={gs.rowCenter}>
              <AntDesign name="save" size={21} style={styles.topButtonRight} />
              <AntDesign name="sharealt" size={21} style={styles.topButtonRight} />
              <Entypo name="dots-three-vertical" size={18} style={styles.topButtonRight} />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    topButtons: {
        ...gs.rowBetween,
        position: "absolute",
        top: 22,
        left: 24,
        right: 24
    },
    topButtonRight: {
      marginLeft: 12,
      color: "#fff"
    }
})