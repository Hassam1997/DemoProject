/** @format */

import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
  },
  mainContainer: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: Metrics.ratio(14),
    borderTopRightRadius: Metrics.ratio(14),
    paddingTop: 20,
    width: Metrics.screenWidth,
    alignSelf: "center",
    top: Metrics.ratio(20),
  },
  titleView: {
    flexDirection: "row",
    alignItems: "center",
    width: Metrics.screenWidth,
    justifyContent: "flex-end",
  },
  titleSubView: {
    alignSelf: "center",
    width: Metrics.screenWidth * 0.67,
  },
  title: {
    lineHeight: 22,
    textAlign: "center",
    fontSize: Fonts.size.size_16,
    fontFamily: Fonts.inter.medium,
    color: Colors.TEXT_GREY,
  },
  cancelText: {
    fontSize: Fonts.size.size_16,
    fontFamily: Fonts.inter.regular,
    color: Colors.CANCEL_TEXT,
    padding: 5,
    paddingRight: Metrics.ratio(16),
  },
  textStyle: {
    lineHeight: 22,
    fontSize: Fonts.size.size_14,
    fontFamily: Fonts.inter.regular,
    color: Colors.TEXT_GREY,
    paddingVertical: Metrics.ratio(15),
    paddingLeft: Metrics.ratio(16),
  },
  textView: {
    marginBottom: Metrics.ratio(25),
  },
  messageView: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageView: {
    marginLeft: Metrics.ratio(16),
  },
  dataView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
