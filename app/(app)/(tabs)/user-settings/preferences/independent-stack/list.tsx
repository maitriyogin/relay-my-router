import React from "react";
import {View} from "react-native";
import { Link } from '@react-navigation/native';

export default function List() {
  return <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <Link to={{screen:'ampere'}}>Go to Amps</Link>
    <Link to={{screen:'voltage'}}>Go to voltage</Link>
  </View>
}
