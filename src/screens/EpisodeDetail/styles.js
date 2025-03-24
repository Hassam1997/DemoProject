/** @format */

import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../theme";

export default StyleSheet.create({
    containerStyle: {
        backgroundColor: Colors.WHITE,
        paddingBottom: Metrics.bottomPadding,
        flexGrow: 1,
    },
    imageView: {
        height: Metrics.ratio(200),
        width: Metrics.screenWidth,
    },
    textStyle: {
        margin: Metrics.ratio(10),
        textAlign: "justify"
    },
    itemSeperator: {
        height: Metrics.ratio(1),
        backgroundColor: Colors.GRAY_LIGHT,
        width: Metrics.screenWidth * 0.94,
        alignSelf: "center",
    },
    subContainer: {
        marginVertical: 6,
        width: Metrics.screenWidth,
        backgroundColor: Colors.white,
    },
    likeButton: {
        width: Metrics.ratio(50),
        height: Metrics.ratio(50),
        backgroundColor: Colors.LIGHT_SECONDARY,
        position: "absolute",
        bottom: Metrics.ratio(80),
        right: Metrics.ratio(30),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Metrics.ratio(50) / 2
    },
    nameBlock: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Metrics.ratio(10),
    },
    ratingBlock: {
        backgroundColor: Colors.GREEN_DARK,
        marginRight: Metrics.ratio(10),
        borderRadius: Metrics.ratio(10)
    },
    textContainer: {
        marginHorizontal: Metrics.ratio(10)
    },
    dateTitle: {
        color: Colors.TEXT_GREY,
        fontSize: Fonts.size.size_18,
        fontFamily: Fonts.inter.medium,
    },
    headingStyle: {
        margin: Metrics.ratio(10),
        width: Metrics.screenWidth * 0.8
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
