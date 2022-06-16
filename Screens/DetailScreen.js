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
import Header from "../Components/Header";
import { PRODUCTS } from "../Data/products";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart";

const DetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  // const {productId} = route.params
  const { productSelected } = useSelector((state) => state.products.value);

  const { height, width } = useWindowDimensions();
  // const [product, setProduct] = useState(null)
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    setOrientation(height > width ? "portrait" : "landscape");
  }, [height, width]);

  // console.log(orientation);

  const handleBack = () => {
    navigation.goBack();
  };

  // useEffect(()=> {
  //     const productSelected = PRODUCTS.find(product => product.id === productId);
  //     // console.log(productSelected);
  //     setProduct(productSelected);
  // }, [productId])

  const handleAdd = (id) => {
    dispatch(addItem({ id: id }));
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
          source={{ uri: productSelected.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.description}>{productSelected.description}</Text>

        <Text style={styles.price}>{productSelected.price}</Text>
        <Button onPress={handleBack} title="Go back" />
        <Button
          onPress={() => handleAdd(productSelected.id)}
          title="Add to cart"
        />
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
    width: 0.6 * Dimensions.get("window").width,
    height: 300,
    marginTop: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
    description: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    },
    price: {
    fontSize: 15,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    },
});
