import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

import { theme } from '../constants';
import { API_DETAIL, fullTitle } from "../utils";

const Details = (props) => {

  const route = useRoute();
  const { link, title} = route.params;
  const [visible, setVisible] = useState(false);

  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color={theme.COLORS.primary} size="large" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => props.navigation.goBack()}
        >
          <Image 
            source={theme.previous}
            style={{
              width: 20,
              height: 20
            }}
          />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>{fullTitle(title)}</Text>
      </View>
      <WebView
        source={{ uri: `${API_DETAIL}${link}` }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
      />
      {visible ? <ActivityIndicatorElement /> : null}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    backgroundColor: theme.COLORS.secondary,
  },  
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: theme.SIZES.hp('8%'),
    paddingHorizontal: theme.SIZES.wp('8%'),
  },
  titleHeader: {
    textAlign: 'center',
    flex: 1,
    color: theme.COLORS.primary,
    fontSize: theme.SIZES.h3
  },
  btnBack: {
    width: theme.SIZES.wp(6),
    height: theme.SIZES.hp(4),
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});


export default Details;