import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Yaazh</Text>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/image.png')}
      />
    </View>
  );
};

export default Header;
