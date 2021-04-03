import React, { Component, useEffect, useState } from "react";

import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight,
  SafeAreaViewBase,
} from "react-native";

const Trending=({navigation})=>{
    const Data =navigation.getParam('Data')
    console.log(Data)
    const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image} />
      );
      const Item = ({ title, image }) => (
        <View style={styles.item}>
          <TouchableOpacity>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        </View>
      );
    return(
<View style={styles.background}>
<SafeAreaView>
<View style={styles.search}>
          <TouchableOpacity >
            <Image
              style={styles.icon}
              source={require("../../assets/search.png")}
            />
            <Text style={styles.find}>search</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconCategory}
              source={require("../../assets/category.png")}
            />
          </TouchableOpacity>
        </View>
<FlatList
          data={Data}
          
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />




</SafeAreaView>
</View>)
}
const styles = StyleSheet.create({
    item: {
        margin: 10,
        borderRadius: 10,
      },
      image: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: 220,
        width: 300,
      }, title: {
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },search: {
        marginTop: 40,
        backgroundColor: "#ffffff",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 10,
        
      },find: {
        paddingTop: 12,
        color: "#827878",
        position: 'absolute',
        paddingLeft:35
    
      },  iconCategory: {
        width: 30,
        height: 30,
       alignSelf:'flex-end',
        margin:5
      },background: {
        backgroundColor: "#FFFFFF00",
        flex: 1,
      },
})
export default Trending