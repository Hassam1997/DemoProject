import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";

export const styles = StyleSheet.create({
  activeIndicator: {
    backgroundColor: Colors.WHITE,
    height: 5,
    width: 5,
    borderRadius: 50,
    marginBottom: 8,
    position: "absolute",
    top: 12,
  },
  icon: {
    height: 28,
    width: 28,
    marginTop: Metrics.ratio(0),
  },
  labelFont: {
    fontSize: Fonts.size.size_12,
    marginBottom: Metrics.ratio(10),
    fontFamily: Fonts.inter.bold,
  },
});
