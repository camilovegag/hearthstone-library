import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { Linking } from "react-native";
import { news } from "./news";

export const News = () => {
  return (
    <FlatList
      data={news}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.post} onPress={() => Linking.openURL(item.link)}>
          <ImageBackground
            style={styles.background}
            source={{
              uri: "https://d2vkoy1na2a6o6.cloudfront.net/images/ui/parchment-f5126a8249a32eb235b139078b4cc13b5fb9d2c29b0e825569312681123d721a1f2e1addb4bad78f979933e561361e2ee2c5f5881ab4fef5385c66c6276c3b44.jpg",
            }}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.description}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.posted}>{item.posted}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  post: {
    margin: 16,
  },
  background: {
    padding: 4,
  },
  image: {
    flex: 1,
    height: 200,
    width: "100%",
  },
  description: {
    margin: 16,
  },
  title: {
    color: "#563B25",
    fontFamily: "Belwe-bold",
    fontSize: 16,
    marginBottom: 16,
  },
  posted: {
    color: "#81684B",
    fontSize: 12,
  },
});
