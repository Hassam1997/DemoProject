/** @format */

import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../theme";

export default StyleSheet.create({
  readmoreStyle: {
    width: Metrics.screenWidth * 0.7,
    marginVertical: Metrics.ratio(10),
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  readmoreText: {
    textAlign: "center",
  },
});
