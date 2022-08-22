import React, { useContext } from "react";
import { View, Text, Alert } from "react-native";
import { styles } from "./style";
import { UserContext } from "../../App";

const BottomNav = () => {
  const user = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text style={styles.icons} onPress={() => Alert.alert(`Hello ${user}`)}>
        Home
      </Text>
      <Text style={styles.icons2} onPress={() => Alert.alert("Setting")}>
        Setting
      </Text>
      <Text style={styles.icons3} onPress={() => Alert.alert("About")}>
        About
      </Text>
    </View>
  );
};

export default BottomNav;
