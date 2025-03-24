/** @format */

import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerView: {
    height: Metrics.ratio(200),
    width: Metrics.screenWidth * 0.941,
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  paginationContainer: {
    alignSelf: "center",
    marginTop: Metrics.ratio(13),
  },
});

export default styles;
