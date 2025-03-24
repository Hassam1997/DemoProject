/** @format */

import { Text } from "react-native";
import PropTypes from "prop-types";
import React from "react";

import styles from "./styles";
import  ButtonView  from "../../components/ButtonView";
import { Colors } from "../../theme";
import { BUTTON_TYPE } from "../../config/Constants";

const AppButton = ({
  title,
  containerStyle,
  textStyle,
  onPress,
  disabled,
  type,
}) => {
  let backgroundColor;
  if (type === BUTTON_TYPE.DEACTIVATE) {
    backgroundColor = Colors.PRIMARY_PURPLE_VARIANT;
  } else {
    backgroundColor = Colors.PRIMARY;
  }
  return (
    <ButtonView
      style={[
        styles.buttonStyle,
        containerStyle,
        { backgroundColor: disabled ? Colors.BUTTON_DISABLE : backgroundColor },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonTextStyle,
          textStyle,
          { color: disabled ? Colors.GREY : Colors.WHITE },
        ]}
      >
        {title}
      </Text>
    </ButtonView>
  );
};

AppButton.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  onPress: PropTypes.func,
};

AppButton.defaultProps = {
  title: "",
  containerStyle: {},
  textStyle: {},
  onPress: () => {},
  disabled: false,
};

export default AppButton;
