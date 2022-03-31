import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from "../constants";
import { changeBackground, changeColor } from "../utils";

const Category = ( { name, value, select, onPress } ) => {


  return (
    <TouchableOpacity 
      style={[styles.container, {backgroundColor: changeBackground(value,select)}]}
      onPress={() => onPress(value)}
    >
      <Text style={[styles.textTitle, {color: changeColor(value,select)}]}>{name}</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.primary,
    width: theme.SIZES.wp('18%'),
    height: theme.SIZES.hp('5%'),
    borderRadius: theme.SIZES.radius2,
    marginRight: theme.SIZES.hp('1%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.COLORS.primary,
    borderWidth: 1
  },
  textTitle: {
    color: theme.COLORS.white,
    fontSize: theme.SIZES.font
  }
});

export default Category;