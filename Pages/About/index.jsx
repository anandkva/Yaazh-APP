import React, { useContext } from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import { UserContext } from "../../App";

const About = () => {
  const user = useContext(UserContext);
  return (
    <>
      <View style={styles.container}>
        <Text>{user}</Text>
      </View>
    </>
  );
};

export default About;
