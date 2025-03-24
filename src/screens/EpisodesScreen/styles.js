/** @format */

import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    imageView: {
        height: Metrics.ratio(200),
        width: Metrics.screenWidth,
    },
    flatlistView: {
        flex: 1
    },
    listView: {
        flexGrow: 1,
        marginBottom: Metrics.ratio(10)
    },
    itemSeperator: {
        height: Metrics.ratio(1),
        backgroundColor: Colors.GRAY_LIGHT,
        width: Metrics.screenWidth * 0.94,
        alignSelf: "center",
    },
    subContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 6,
        width: Metrics.screenWidth,
        backgroundColor: Colors.white,
    },
});
