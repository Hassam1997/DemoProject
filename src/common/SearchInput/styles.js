/** @format */

import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../theme";
import { Util } from "../../utils";

export default StyleSheet.create({
  container: {
    height: Metrics.ratio(46),
    backgroundColor: Colors.PRIMARY_INPUT,
    flex: 1,
    borderRadius: Metrics.ratio(18),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: Metrics.ratio(14),
    marginTop: Metrics.ratio(10),
    marginBottom: Metrics.ratio(15),
  },
  placeHolder: {
    marginHorizontal: Metrics.ratio(10),
  },
  textInputStyle: {
    color: Colors.GREY,
    fontSize: Fonts.size.size_13,
    fontFamily: Fonts.inter.regular,
    marginHorizontal: Metrics.ratio(10),
    height: Metrics.ratio(45, 45),
    flex: 1,
  },
  cancelButton: {
    //padding: Metrics.ratio(8),
  },
  btnCancelStyle: {
    marginLeft: Metrics.ratio(10),
    justifyContent: "center",
    padding: 2,
    height: Metrics.ratio(46, 46),
    marginTop: Util.isPlatformAndroid() ? 0 : Metrics.ratio(5),
  },
});
