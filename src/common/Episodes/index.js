/** @format */

import React from "react";
import PropTypes from "prop-types";
import { Images } from "../../theme";
import ButtonView from "../../components/ButtonView";
import ImageView from "../../components/ImageView";
import styles from "./styles";
import Block from "../Block";
import { Text } from "..";
import { ShowUtil, UserUtil } from "../../dataUtils";
import { Util } from "../../utils";
import { AIR_DATE } from "../../config/Constants";

const Episodes = ({
    onPress,
    data,
    index
}) => {
    const TagView = onPress ? ButtonView : Block;
    return (
        <TagView style={[styles.cardContainer]} onPress={onPress}>
            <ImageView
                source={
                    Util.isPlatformIOS()
                        ? { uri: ShowUtil.image(data) }
                        : ShowUtil.image(data) != ""
                            ? { uri: ShowUtil.image(data) }
                            : Images.images.placeholder
                }
                style={styles.imageView}
                placeholderStyle={styles.imageView}
                resizeMode="cover"
            />
            <Block style={styles.innerContainer}>
                <Block style={styles.textContainer}>
                    <Text numberOfLines={2} style={styles.title}>
                        S{ShowUtil.season(data)} E{ShowUtil.episode(data)} – {ShowUtil.name(data)}
                    </Text>
                </Block>
                <Block style={styles.textContainer}>
                    <Text numberOfLines={2} style={styles.dateTitle}>
                        {Util.formatDate(ShowUtil.episode_date(data), AIR_DATE)} {ShowUtil.runtime(data)} min.
                    </Text>
                </Block>
                <Block style={styles.textContainer}>
                    <Text numberOfLines={3} style={styles.summaryTitle}>
                        {ShowUtil.summary(data).replace(/<b>(.*?)<\/b>/g, '$1')
                            .replace(/<[^>]*>?/gm, '')}
                    </Text>
                </Block>
            </Block>
        </TagView>
    );
};

Episodes.propTypes = {
    onPress: PropTypes.func,
    data: PropTypes.any,
    index: PropTypes.any,
};

Episodes.defaultProps = {
    onPress: () => { },
    data: null,
    index: null,
};

export default Episodes;
