import React from "react";
import { ImageBackground, Text, StyleSheet, Image, View } from "react-native";

export const CardDetail = ({ route }) => {
  const { artistName, cardTypeId, rarityId, image, flavorText } = route.params;

  const getType = (id) => {
    return id === 3
      ? "Hero"
      : id === 4
      ? "Minion"
      : id === 5
      ? "Spell"
      : id === 7
      ? "Weapon"
      : "Type not found";
  };
  const getRarity = (id) => {
    return id === 1
      ? "Common"
      : id === 2
      ? "Free"
      : id === 3
      ? "Rare"
      : id === 4
      ? "Epic"
      : id === 5
      ? "Legendary"
      : "Rarity not found";
  };

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://d2vkoy1na2a6o6.cloudfront.net/images/ui/parchment-f5126a8249a32eb235b139078b4cc13b5fb9d2c29b0e825569312681123d721a1f2e1addb4bad78f979933e561361e2ee2c5f5881ab4fef5385c66c6276c3b44.jpg",
      }}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.flavorText}>{flavorText}</Text>
        <Text style={styles.text}>
          Card Type: <Text style={styles.sideText}>{getType(cardTypeId)}</Text>
        </Text>
        <Text style={styles.text}>
          Rarity: <Text style={styles.sideText}>{getRarity(rarityId)}</Text>
        </Text>
        <Text style={styles.text}>
          Artist: <Text style={styles.sideText}>{artistName}</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "70%",
    width: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "center",
    width: 300,
  },
  flavorText: {
    textAlign: "center",
    fontFamily: "Open-sans-italic",
    marginVertical: 8,
  },
  text: {
    color: "#4F1617",
    fontFamily: "Belwe-bold",
    marginVertical: 4,
  },
  sideText: {
    color: "#222",
  },
});
