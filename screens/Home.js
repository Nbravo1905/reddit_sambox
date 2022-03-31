import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView } from 'react-native';

import { theme } from '../constants';
import Category from "../components/Category";
import Card from "../components/Card";

import { getReddit, categories } from "../utils";


const Home = ( ) => {

  const [data, setData] = useState([]);
  const [category, setCategory] = useState('new');

  const [paginate, setPaginate] = useState('');
  const [tempPaginate, setTempPaginate] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    getReddit(category, paginate)
      .then((res) => res.json())
      .then((response) => {
        let after = response.data.after;
        let newData = response.data.children;
        setData([
          ...data,
          ...newData
        ]);
        setTempPaginate(after);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

  }, [category, paginate]);


  function onPressCategory( item ) {
    setCategory(item);
    setIsLoading(true);
    setData([]);
  }


  function paginateList () {

    setPaginate(tempPaginate);

  }

  const footerList = () => {

    return (
      <View style={styles.footer}>
        <ActivityIndicator size={'large'} color={theme.COLORS.primary} />
      </View>
    )

  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reddit Chiper</Text>
      <View>
        {
          categories != null ? 
            <ScrollView 
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {
                categories.map((item, key) => (
                  <Category {...item} key={key} select={category} onPress={onPressCategory} />
                ))
              }
            </ScrollView>
          : undefined 
        }
      </View>

      <View style={styles.space}>
        {
          isLoading ? 
          (
            <ActivityIndicator color={theme.COLORS.primary} size='large' />
          ) : (
            <FlatList 
              data={data}
              renderItem={ ({ item }) => <Card {...item.data} /> }
              onEndReached={paginateList}
              ListFooterComponent={footerList}
              showsVerticalScrollIndicator={false}
            />
          )
        }
        
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.SIZES.wp('8%'),
    backgroundColor: theme.COLORS.secondary
  },
  title: {
    fontSize: theme.SIZES.h2,
    textAlign: 'center',
    marginVertical: theme.SIZES.hp('5%'),
    fontWeight: 'bold'
  },
  space: {
    marginVertical: theme.SIZES.hp('3%')
  },
  footer: {
    height: theme.SIZES.hp('25%'),
    marginTop: theme.SIZES.hp('1%')
  }
});


export default Home;