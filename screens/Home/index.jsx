import React from "react";
import { ImageBackground, Text, StyleSheet, Image } from "react-native";
import { News } from "../../components/News";

export const Home = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://d2vkoy1na2a6o6.cloudfront.net/images/blog/bg_header_news-2ec53df9a8551d7a464ad6ffe49221170442e676f0c2be447b717898e2ce425a644f96e2f8d18662dbdfb0f5c78c457b08fb269e8f487d7085dda53a0940aab7.jpg",
      }}
      style={styles.background}
    >
      <Text style={styles.newsTitle}>News</Text>
      <News />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  newsTitle: {
    alignSelf: "center",
    color: "#fff",
    fontFamily: "Belwe-bold",
    fontSize: 24,
    marginVertical: 16,
  },
});
