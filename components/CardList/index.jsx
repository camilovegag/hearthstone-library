import React from "react";
import { FlatList, Image, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";

export const CardList = (props) => {
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://d2vkoy1na2a6o6.cloudfront.net/images/ui/parchment-f5126a8249a32eb235b139078b4cc13b5fb9d2c29b0e825569312681123d721a1f2e1addb4bad78f979933e561361e2ee2c5f5881ab4fef5385c66c6276c3b44.jpg",
      }}
    >
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        data={props.data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props.navigation.push("Details", item)}>
            <Image
              style={styles.image}
              source={{ uri: item.image }}
              defaultSource={require("../../assets/card-back.png")}
            />
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5CEA3",
    alignItems: "center",
  },

  image: {
    height: 250,
    width: 180,
  },
});
