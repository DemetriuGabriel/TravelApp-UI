import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { gs, colors } from '../../../styles';

export default function components() {
  const extras = [
      "Payment at Chekout",
      "WI-FI Network is off  by  12:00pm",
      "No  swmming after 10:00pm",
      "No more than  2  bags  of luggage",
      "No signing while showering",
      "No Refunds"
    ];

  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>Before you  go</Text>
      <View style={styles.list}>
        {extras.map((extra, key) => {
                return <Text style={styles.listItem} key={key}>&mdash; {extra}</Text>
        }) }
      </View>
      <View style={{ marginTop: 32, marginBottom: -40 }}>
          <TouchableOpacity style={styles.filterBotton}>
            <Text style={{ fontWeight: "700", color: "#fff" }}>Filter</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    marginTop: 8,
    marginBottom: 64
  },
  list: {
      marginTop: 16,
      marginBottom: 8
  },
  listItem: {
    color: colors.textSec,
    marginVertical: 8
  },
  filterBotton: {
    ...gs.button,
    paddingVertical: 16,
  }
});
