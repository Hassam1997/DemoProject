/** @format */

import { StyleSheet } from "react-native";
import { Fonts, Metrics, Colors } from "../../theme";

export default StyleSheet.create({
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Metrics.ratio(16),
    alignItems: "center",
    paddingVertical: Metrics.ratio(5),
  },
  container: {
    borderRadius: Metrics.ratio(6),
  },
  btnStyleContainer: {
    width: Metrics.ratio(24, 24, true),
    height: Metrics.ratio(24, 24, true),
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.CHECKBOX,
    borderWidth: 1,
  },
  innerCircleStyle: {
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    backgroundColor: Colors.maroon,
  },
  textStyle: {
    fontFamily: Fonts.inter.regular,
    fontSize: Fonts.size.size_14,
    color: Colors.TEXT_GREY,
    width: Metrics.screenWidth * 0.8,
  },
  darkTextStyle: {
    fontSize: Fonts.size.size_17,
    paddingLeft: Metrics.ratio(16),
    color: Colors.dark,
  },
});
