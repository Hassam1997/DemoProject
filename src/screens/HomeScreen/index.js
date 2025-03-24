import React from "react";
import { Block, Text } from "../../common";
import styles from "./styles";
import { Colors, Images } from "../../theme";
import ImageView from "../../components/ImageView";
import { Util } from "../../utils";
import { getShowDetail, homeGetShow } from "../../ducks/home";
import ScrollViewApi from "../../components/ScrollViewApi";
import { ShowUtil } from "../../dataUtils";


const HomeScreen = () => {

  const renderContent = (data) => {
    return (
      <Block style={styles.mainView}>
        <Block backgroundColor={Colors.BLACK}>
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
            resizeMode="contain"
          />
        </Block>
        <Block style={styles.nameBlock}>
          <Text style={styles.textStyle} color={Colors.black} size={24} bold={true}>{ShowUtil.name(data)}</Text>
          <Block style={styles.ratingBlock}>
            <Text style={styles.textStyle} color={Colors.black} size={20} bold={true}>{ShowUtil.rating(data)}</Text>
          </Block>
        </Block>
        <Text style={styles.textStyle} color={Colors.black} size={16}>{ShowUtil.summary(data).replace(/<b>(.*?)<\/b>/g, '$1')
          .replace(/<[^>]*>?/gm, '')}</Text>
        <Block>
          <Block style={styles.genereStyle}>
            {ShowUtil.genres(data)?.map((item, index) => {
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
    <Block style={styles.container}>
      <ScrollViewApi
        identifier={`${ShowUtil.id(44458)}`}
        actionType={homeGetShow.type}
        requestAction={homeGetShow.request}
        selectorData={getShowDetail}
        content={renderContent}
        contentContainerStyle={styles.containerStyle}
      />
    </Block>
  );
};

export default HomeScreen;
