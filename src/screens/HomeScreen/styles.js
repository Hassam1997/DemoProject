/** @format */

import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../theme";

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.WHITE,
    paddingBottom: Metrics.bottomPadding,
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  imageView: {
    height: Metrics.ratio(300),
    width: Metrics.screenWidth,
  },
  mainView: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  textStyle: {
    margin: Metrics.ratio(10),
    textAlign: "justify",
  },
  itemSeperator: {
    height: Metrics.ratio(1),
    backgroundColor: Colors.GRAY_LIGHT,
    width: Metrics.screenWidth * 0.94,
    alignSelf: "center",
  },
  nameBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Metrics.ratio(10)
  },
  ratingBlock: {
    backgroundColor: Colors.GREEN_DARK,
    marginRight: Metrics.ratio(10),
    borderRadius: Metrics.ratio(10)
  },
  genereStyle: {
    flexDirection: "row",
    marginTop: Metrics.ratio(5)
  },
  genereTextStyle: {
    backgroundColor: Colors.GRAY_LIGHT,
    marginHorizontal: Metrics.ratio(10),
    padding: Metrics.ratio(10),
    borderRadius: Metrics.ratio(5)
  }
});
