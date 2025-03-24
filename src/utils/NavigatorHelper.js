import React from "react";
import { Images, Metrics, AppStyles, Colors } from "../theme";
import { Image } from "react-native";
import ButtonView from "../components/ButtonView";
import ImageButton from "../components/ImageButton"
import { NavigationService } from "../utils";
import { Block, Text } from "../common";
const headerColor = {
  headerStyle: {
    backgroundColor: "#313131",
    borderBottomWidth: 0,
  },
};
const removeBorder = {
  headerStyle: {
    borderBottomWidth: 0,
  },
};
const removeHeader = {
  headerShown: false,
};
const headerTransparent = {
  headerTransparent: true,
};
const removeHeaderLeft = {
  headerLeft: false,
};
const backImage = (tintColor = Colors.secondary.azure) => {
  return {
    headerBackTitleVisible: false,
    headerBackImage: () => (
      <Image
        source={Images.general.arrowLeftIcon}
        style={{
          marginLeft: Metrics.baseMargin,
        }}
      />
    ),
  };
};
const title = (headerTitle, fontSize, fontFamily) => ({
  headerTitle,
  headerTitleStyle: {
    color: Colors.TEXT_GREY,
    fontSize: fontSize,
    fontFamily: fontFamily,
  },
});
const defaultNavOptions = (navOptions) => {
  return {
    defaultNavigationOptions: ({ navigation }) => navOptions,
  };
};
const navOptions = (navOptions) => {
  return {
    navigationOptions: ({ navigation }) => navOptions,
  };
};
const backButton = (onPress = () => NavigationService.pop()) => {
  return {
    headerLeft: (props) => (
      <ButtonView
        onPress={onPress}
        style={{
          height: 24,
          width: 24,
          ...AppStyles.centerAligned,
          marginLeft: 10,
        }}
      >
        <Image source={Images.general.arrowLeftIcon} resizeMode="contain" />
      </ButtonView>
    ),
  };
};
const logoTitle = (title) => {
  return {
    headerTitle: "",
    headerLeft: (props) => (
      <Block
        row
        style={{
          ...AppStyles.centerAligned,
          marginLeft: 16,
        }}
      >
        <Image
          source={Images.icons.kinektIcon}
          resizeMode="contain"
          style={{
            width: Metrics.ratio(36),
            height: Metrics.ratio(36),
          }}
        />
        <Text
          bold
          size={18}
          color={Colors.FILTER}
          style={{ marginLeft: Metrics.ratio(6) }}
        >
          {title}
        </Text>
      </Block>
    ),
  };
};
const badgeButton = (icon, count, onPress) => {
  return {
    headerRight: (props) => (
      <ButtonView
        style={{
          ...AppStyles.centerAligned,
          marginRight: 13,
          padding: 3,
        }}
        onPress={onPress}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: Metrics.ratio(22),
            height: Metrics.ratio(22),
          }}
        />
        {count > 0 ? (
          <Block
            row
            style={{
              ...AppStyles.centerAligned,
              width: 18,
              height: 18,
              borderRadius: 18 / 2,
              backgroundColor: Colors.PRIMARY,
              position: "absolute",
              right: -1,
              bottom: 10,
              borderWidth: 1,
              borderColor: Colors.white,
            }}
          >
            <Text medium size={8} color={Colors.white}>
              {count}
            </Text>
          </Block>
        ) : null}
      </ButtonView>
    ),
  };
};

const headerRightButton = (title, onPress) => {
  return {
    headerRight: (props) => (
      <ButtonView
        style={{
          ...AppStyles.centerAligned,
          marginRight: 13,
          padding: 3,
        }}
        onPress={onPress}
      >
        <Text p size={14} color={Colors.FILTER}>
          {title}
        </Text>
      </ButtonView>
    ),
  };
};

const imageButton = (source, onPress) => {
  return {
    headerRight: (props) => (
      <ImageButton
        style={{
          ...AppStyles.centerAligned,
          marginRight: 13,

          alignSelf: "flex-end",
        }}
        source={source}
        onPress={onPress}
      />
    ),
  };
};

export {
  headerColor,
  removeBorder,
  headerTransparent,
  removeHeader,
  removeHeaderLeft,
  backImage,
  title,
  defaultNavOptions,
  navOptions,
  backButton,
  logoTitle,
  badgeButton,
  headerRightButton,
  imageButton,
};
