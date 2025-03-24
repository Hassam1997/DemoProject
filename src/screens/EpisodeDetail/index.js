import React from "react";
import { Image } from "react-native";
import { Block, Text } from "../../common";
import styles from "./styles";
import { Colors, Fonts, Images } from "../../theme";
import ImageView from "../../components/ImageView";
import { DataHandler, Util } from "../../utils";
import ScrollViewApi from "../../components/ScrollViewApi";
import { getEpisodeDetail, homeGetEpisodeDetail, toggleEpisodeFavourite } from "../../ducks/home";
import { ShowUtil } from "../../dataUtils";
import { title } from "../../utils/NavigatorHelper";
import ButtonView from "../../components/ButtonView";
import { useDispatch, useSelector } from "react-redux";
import { AIR_DATE } from "../../config/Constants";

const EpisodeDetail = (props) => {
    const { route, navigation } = props;
    const { data } = route.params;
    const dispatch = useDispatch();
    const episodes = useSelector(getEpisodeDetail(ShowUtil.id(data)));

    React.useLayoutEffect(() => {
        navigation.setOptions({
            ...title(ShowUtil.name(data), 16, Fonts.inter.bold),
        });
    }, [navigation]);

    const onPurchasedPress = (item) => {
        let description = ShowUtil.favourite(episodes) ? "Are you sure you want to un-mark it as favourite?" : "Are you sure you want to mark it as favourite?"
        DataHandler.getAlertModalRef().show({
            title: "Alert",
            description: description,
            callback: () => {
                dispatch({
                    type: toggleEpisodeFavourite.type,
                    payload: {
                        identifier: ShowUtil.id(data),
                    },
                })
            },
        });
    };

    const renderContent = (data) => {
        return (
            <Block style={styles.subContainer}>
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
                <Block style={styles.nameBlock}>
                    <Text style={styles.headingStyle} color={Colors.black} size={24} bold={true}>S{ShowUtil.season(data)} E{ShowUtil.episode(data)} – {ShowUtil.name(data)}</Text>
                    <Block style={styles.ratingBlock}>
                        <Text style={styles.textStyle} color={Colors.black} size={20} bold={true}>{ShowUtil.rating(data)}</Text>
                    </Block>
                </Block>
                <Block style={styles.textContainer}>
                    <Text numberOfLines={2} style={styles.dateTitle}>
                        {Util.formatDate(ShowUtil.episode_date(data), AIR_DATE)} {ShowUtil.runtime(data)} min.
                    </Text>
                </Block>
                <Text style={styles.textStyle} color={Colors.black} size={16}>{ShowUtil.summary(data).replace(/<b>(.*?)<\/b>/g, '$1')
                    .replace(/<[^>]*>?/gm, '')}</Text>
                <Block>
                    <Block style={styles.genereStyle}>
                        {ShowUtil.genres(episodes)?.map((item, index) => {
                            return (
                                <Block key={index}>
                                    <Text style={styles.genereTextStyle} color={Colors.black} size={14}>{item}</Text>
                                </Block>
                            )
                        })}
                    </Block>
                </Block>
            </Block>
        );
    };

    return (
        <>
            <ScrollViewApi
                payload={{ id: ShowUtil.id(data) }}
                identifier={`${ShowUtil.id(data)}`}
                actionType={homeGetEpisodeDetail.type}
                requestAction={homeGetEpisodeDetail.request}
                selectorData={getEpisodeDetail}
                content={renderContent}
                contentContainerStyle={styles.containerStyle}
                showsVerticalScrollIndicator={false}
            />
            <ButtonView style={[styles.likeButton]} onPress={() => {
                onPurchasedPress()
            }}>
                <Image source={Images.icons.heartIcon} style={{
                    tintColor: ShowUtil.favourite(episodes) ? Colors.RED : Colors.GRAY97
                }} />
            </ButtonView>
        </>
    );
};

export default EpisodeDetail;
