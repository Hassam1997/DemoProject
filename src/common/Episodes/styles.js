/** @format */

import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";
const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        paddingVertical: Metrics.ratio(10, 10),
        borderRadius: 10,
        width: Metrics.screenWidth * 0.94,
        alignItems: "flex-start",
    },
    imageView: {
        height: Metrics.ratio(120),
        width: Metrics.ratio(160),
        borderRadius: Metrics.ratio(20) / 2,
        overflow: "hidden",
    },
    innerContainer: {
        marginLeft: Metrics.ratio(15),
        flexDirection: "column",
        alignItems: "flex-start",
    },
    textContainer: {
        // width: Metrics.screenWidth * 0.68,
        marginVertical: Metrics.ratio(2)
    },
    summaryTitle: {
        marginVertical: Metrics.ratio(2),
        color: Colors.TEXT_GREY,
        fontSize: Fonts.size.size_12,
        fontFamily: Fonts.inter.medium,
        width: Metrics.screenWidth * 0.45,
        textAlign: "justify"
    },
    imageContainer: {
        padding: Metrics.ratio(10),
    },
    title: {
        color: Colors.TEXT_GREY,
        fontSize: Fonts.size.size_16,
        fontFamily: Fonts.inter.bold,
        width: Metrics.screenWidth * 0.5,
    },
    dateTitle: {
        color: Colors.TEXT_GREY,
        fontSize: Fonts.size.size_14,
        fontFamily: Fonts.inter.medium,
        width: Metrics.screenWidth * 0.5,
    },
    subTitle: {
        color: Colors.LIGHT_GREY,
        fontSize: Fonts.size.size_12,
        fontFamily: Fonts.inter.regular,
        marginTop: Metrics.ratio(3),
        marginRight: Metrics.ratio(6),
    },
    distance: {
        color: Colors.LIGHT_GREY,
        fontSize: Fonts.size.size_12,
        fontFamily: Fonts.inter.regular,
        marginLeft: Metrics.ratio(6),
        top: 1,
    },
    subView: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default styles;
