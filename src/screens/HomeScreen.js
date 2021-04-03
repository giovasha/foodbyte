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
} from "react-native";
import { withNavigation } from 'react-navigation';
const HomeScreen = ({navigation}) => {
  const people = [
    {
      id: 1,
      image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/7727/production/_103330503_musk3.jpg",
    },
    {
      id: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91oxDsVJ2UL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      image:
        "https://nexter.org/wp-content/uploads/2018/07/Elon-Musk-meme-pics.jpg",
    },
    {
      id: 4,
      image:
        "https://www.orissapost.com/wp-content/uploads/2019/10/dh4Je47-901x1024.jpg",
    },
    { id: 5, image: "https://i.ytimg.com/vi/x3tlVE_QXm4/hqdefault.jpg" },
  ];
  const category = [
    {
      id: 1,
      title: "Italian",
      image:
        "https://www.englishclub.com/images/vocabulary/food/italian/italian-food-1024.jpg",
    },
    {
      id: 2,
      title: "Chinese",
      image:
        "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2020/05/Dumpling-Daughter-feat.jpg",
    },
    {
      id: 3,
      title: "Mexican",
      image:
        "https://imgmedia.lbb.in/media/2019/05/5cd422757baf5e17d08483ef_1557406325142.jpg",
    },
  ];
  const Data = [
    {
      id: 1,
      title: "Happy Bones",
      category: "italian",
      place: "394 broom st, NY, USA",
      rating: "4.5",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg",
    },
    {
      id: 2,
      title: "Uncle boon",
      category: "italian",
      place: "7 spring st, Washington, USA",
      rating: "4.4",
      image:
        "https://www.chasinglenscapes.com/wp-content/uploads/2020/06/food-photography-on-the-go-tips.jpg",
    },
    {
      id: 3,
      title: "Wishes",
      category: "french",
      place: "12 old valley, Georgia, tbilisi",
      rating: "4,2",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636",
    },
  ];
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

  const renderItem2 = ({ item }) => (
    <Item2 title={item.title} image={item.image} />
  );
  const Item2 = ({ title, image }) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <ImageBackground style={styles.image2} source={{ uri: image }}>
          <Text style={styles.title2}>{title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
  const renderItem3 = ({ item }) => (
    <Item3 title={item.title} image={item.image} />
  );
  const Item3 = ({ image }) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <Image style={styles.image3} source={{ uri: image }} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.background}>
      <SafeAreaView>
        <View style={styles.search}>
          <TouchableOpacity >
            <ImageBackground
              style={styles.icon}
              source={require("../../assets/search.png")}
            >
            <Text style={styles.find}>Find Restaurants</Text> </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity>
            <BackgroundImage
              style={styles.iconCategory}
              source={require("../../assets/category.png")}
            />
          </TouchableOpacity>
        </View>
        <View >
          <Text style={styles.Trending}>Trending Restaurants</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Trending',{Data:Data})}}>
            <Text style={styles.seeAll}>see all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={Data}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View >
          <Text style={styles.Trending}>Categories</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>see all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={category}
            horizontal={true}
            renderItem={renderItem2}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View >
          <Text style={styles.Trending}>Friends</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>see all</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <FlatList
            data={people}
            horizontal={true}
            renderItem={renderItem3}
            keyExtractor={(item) => item.id}
          />
        </TouchableOpacity>
        <View style={styles.icons}>
          <Image
            style={styles.iconHome}
            source={require("../../assets/home.png")}
          />
          <Image
            style={styles.iconSaved}
            source={require("../../assets/saved.png")}
          />
          <Image
            style={styles.iconPlus}
            source={require("../../assets/plus.png")}
          />
          <Image
            style={styles.iconBell}
            source={require("../../assets/bell.png")}
          />
          <Image
            style={styles.iconProfile}
            source={require("../../assets/profile.png")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    position:'absolute',
    margin:5
  },
  iconCategory: {
    width: 30,
    height: 30,
   alignSelf:'flex-end',
    margin:5
  },
  icon2: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  search: {
    marginTop: 40,
    backgroundColor: "#ffffff",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    
  },
  find: {
    paddingTop: 12,
    color: "#827878",
    position: 'absolute',
    paddingLeft:35

  },
  background: {
    backgroundColor: "#FFFFFF00",
    flex: 1,
  },
  Trending: {
    marginLeft: 20,
    paddingLeft: 20,
    fontSize: 17,
    fontWeight: "bold",
    flexDirection: "row-reverse",
    position:'absolute'
  },
  seeAll: {
    marginRight:5,
    alignSelf:'flex-end'
  },
  flexDirection: {
    flexDirection: "row",
  },
  image: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 220,
    width: 300,
  },
  item: {
    margin: 10,
    borderRadius: 10,
  },
  title: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  seeAll2: {
    paddingLeft: 170,
  },
  seeAll3: {},
  image2: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  title2: {
    color: "#FFFFFF",
    textAlignVertical: "center",
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  image3: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  iconHome: {
    width: 50,
    height:50,
    margin: 5,
  },
  iconSaved: {
    width: 45,
    height: 60,
    margin: 5,
  },
  iconPlus: {
    width: 60,
    height: 60,
    margin: 5,
  },
  iconBell: {
    height: 55,
    width: 47,
    margin: 5,
  },
  iconProfile: {
    width: 43,
    height: 60,
    margin: 5,
  },
  icons: {
    flexDirection: "row",
    
    justifyContent: "space-evenly",
    flex: 1,
  },
});

export default HomeScreen;
