import React, { useState, useRef } from "react";
import { ActivityIndicator, Animated, FlatList, Image } from "react-native";
import { Block } from "../../common";
import PropTypes from "prop-types";
import styles from "./styles";
import ImageView from "../ImageView";
import { AppStyles, Colors, Images, Metrics } from "../../theme";
// import PaginationDot from "react-native-animated-pagination-dot";
import { Util } from "../../utils";
import ButtonView from "../ButtonView";
// import Video from "react-native-fast-video";

const ImageSlider = ({ data, paginationRender, isVideo, videoUri }) => {
  const slideRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLoader, setLoader] = useState(true);
  const [play, setPlay] = useState(false);

  const transformedData = data?.map((url, index) => ({
    key: index.toString(),
    url: url.toString(),
  }));

  const viewableitemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderPagination = (index, images) => {
    return (
      <Block style={styles.paginationContainer}>
        <PaginationDot
          activeDotColor={Colors.DOT_ACTIVE}
          inactiveDotColor={Colors.DOT_INACTIVE}
          curPage={index}
          maxPage={images?.length}
        />
      </Block>
    );
  };

  const renderVideo = (index, images) => {
    const Pressable = paginationRender ? ButtonView : Block;
    return (
      <Pressable
        onPress={() => {
          setPlay(true);
        }}
      >
        {play ? (
          <Block style={styles.bannerView}>
            <Video
              source={{
                uri: videoUri,
              }}
              ref={(ref) => {}}
              style={!showLoader ? styles.bannerView : null}
              resizeMode={Util.isPlatformAndroid() ? "contain" : "none"}
              controls={true}
              paused={false}
              onReadyForDisplay={() => {
                Util.isPlatformIOS() && setLoader(false);
              }}
              onLoad={() => {
                Util.isPlatformAndroid() && setLoader(false);
              }}
            />
            {showLoader && (
              <ActivityIndicator
                style={AppStyles.centerAligned}
                animating
                size="large"
                color={Colors.PRIMARY}
              />
            )}
          </Block>
        ) : (
          <ImageView
            source={Images.images.video_thumbnail}
            style={styles.bannerView}
            placeholderStyle={styles.bannerView}
            resizeMode="cover"
          />
        )}
      </Pressable>
    );
  };

  return (
    <Block>
      {isVideo ? (
        renderVideo()
      ) : (
        <>
          <FlatList
            data={transformedData}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={Metrics.screenWidth * 0.942}
            pagingEnabled
            bounces={false}
            ref={slideRef}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            scrollEventThrottle={32}
            disableIntervalMomentum
            snapToAlignment="center"
            legacyImplementation={false}
            onViewableItemsChanged={viewableitemChanged}
            viewabilityConfig={viewConfig}
            keyExtractor={(item, index) => item.key}
            renderItem={({ item, index }) => {
              return (
                <>
                  <ImageView
                    source={
                      Util.isPlatformIOS()
                        ? { uri: item.url }
                        : item.url != ""
                        ? { uri: item.url }
                        : Images.images.placeholder
                    }
                    style={styles.bannerView}
                    placeholderStyle={styles.bannerView}
                    resizeMode="cover"
                  />
                </>
              );
            }}
          />
          {paginationRender &&
            data?.length > 1 &&
            renderPagination(currentIndex, data)}
        </>
      )}
    </Block>
  );
};

ImageSlider.propTypes = {
  onPress: PropTypes.func,
  data: PropTypes.any,
  index: PropTypes.any,
  onButtonPress: PropTypes.func,
  paginationRender: PropTypes.bool,
};

ImageSlider.defaultProps = {
  onPress: undefined,
  data: null,
  index: null,
  onButtonPress: () => {},
  paginationRender: false,
};

export default ImageSlider;
