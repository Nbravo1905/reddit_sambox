import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from "../constants";
import { fullTitle, formatDate } from "../utils";

export default function Card( {
  title,
  thumbnail,
  author_fullname,
  score,
  num_comments,
  created,
  permalink,
}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('Details', {link: permalink, title})}
    >
      <Image 
        source={{uri: thumbnail != "" ? thumbnail : theme.img}}
        style={styles.img}
        resizeMode='contain'
      />
      <View style={{flex:1, marginLeft: 6}}>
        <Text style={styles.textTitle}>{fullTitle(title)}</Text>
        <View style={styles.description}>
          <View>
            <Text style={styles.textDescription}>{author_fullname}</Text>
            <Text style={[styles.textDescription, {fontWeight: 'bold'}]}>Author</Text>
          </View>
          
          <View>
            <Text style={styles.textDescription}>{score}</Text>
            <Text style={[styles.textDescription, {fontWeight: 'bold'}]}>Score</Text>
          </View>
          <View>
            <Text style={styles.textDescription}>{num_comments}</Text>
            <Text style={[styles.textDescription, {fontWeight: 'bold'}]}>Comments</Text>
          </View>
        </View>
        <Text style={styles.textDate}>{formatDate(created)}</Text>
      </View>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.SIZES.hp('1%'),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: theme.COLORS.primary,
  },
  img: {
    width: theme.SIZES.wp('20%'),
    height: theme.SIZES.hp('10%'),
  },
  textTitle: {
    fontSize: theme.SIZES.h4,
    fontWeight: 'bold'
  },
  description: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginVertical: theme.SIZES.hp('1%')
  },
  textDescription: {
    fontSize: theme.SIZES.base,
    textAlign: 'center'
  },
  textDate: {
    fontSize: theme.SIZES.base,
    textAlign: 'right',
    paddingBottom: theme.SIZES.hp('1%'),
  }
});