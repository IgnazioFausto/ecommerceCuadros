import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PRODUCTS } from "../Data/products";

const DetailScreen = ({ route, navigation }) => {
  const { productSelected } = useSelector((state) => state.products.value);
  const { height, width } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape");
  }, [height, width]);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    productSelected && (
      <View
        style={
          orientation === "portrait"
            ? styles.containerVertical
            : styles.containerHorizontal
        }
      >
        <Image
          source={{ uri: productSelected?.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text>{productSelected?.description}</Text>
        <Text>$ {productSelected?.price}</Text>
        <Button onPress={handleBack} title="Go back" />
      </View>
    )
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  containerVertical: {
    flex: 1,
    flexDirection: "column",
  },
  containerHorizontal: {
    flex: 1,
    flexDirection: "row",
  },
  image: {
    width: 0.8 * Dimensions.get("window").width,
    height: 300,
    marginTop: 30,
  },
});
