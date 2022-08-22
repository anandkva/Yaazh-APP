import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icons}>Home</Text>
      <Text style={styles.icons2}>Setting</Text>
      <Text style={styles.icons3}>About</Text>
    </View>
  );
};

export default BottomNav;