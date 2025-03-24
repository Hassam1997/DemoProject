/** @format */

import PropTypes from "prop-types";
import React, { useState } from "react";
import { Image } from "react-native";
import { Text } from "..";
import { ButtonView } from "../../components";
import { Colors, Images, Metrics } from "../../theme";
import Block from "../Block";
import styles from "./styles";

const CircleCheck = ({
  title,
  onPressButton,
  identifier,
  containerStyle,
  isSelected,
  tintColor,
  unckeck,
}) => {
  const renderCheckCircle = () => {
    return (
      <Block
        style={[
          styles.btnStyleContainer,
          isSelected
            ? { backgroundColor: Colors.PRIMARY, borderWidth: 0 }
            : { backgroundColor: Colors.WHITE },
          containerStyle,
        ]}
      >
        {unckeck ? null : (
          <Image
            source={Images.icons.checkIcon}
            style={{ tintColor: tintColor }}
          />
        )}
      </Block>
    );
  };
  const TagView = unckeck ? Block : ButtonView;
  return (
    <TagView
      disabledOpacity={1}
      debounceTime={0}
      onPress={() => onPressButton?.(identifier)}
      style={[styles.mainView]}
    >
      {title && <Text style={styles.textStyle}>{title}</Text>}
      {renderCheckCircle()}
    </TagView>
  );
};

CircleCheck.propTypes = {
  isSelected: PropTypes.any,
  onPressButton: PropTypes.func,
};

export default CircleCheck;
