/** @format */
import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";
export default StyleSheet.create({
  text: { padding: 30 },
  buttonStyle: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    height: Metrics.ratio(46),
  },
  buttonTextStyle: {
    color: Colors.white,
    fontSize: Metrics.generatedFontSize(14, 14, true),
    fontFamily: Fonts.inter.medium,
  },
});
