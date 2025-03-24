/** @format */
import PropTypes from "prop-types";
import React from "react";
import { Image, TextInput } from "react-native";
import { Text } from "..";
import { ButtonView } from "../../components";
import { Colors, Images } from "../../theme";
import Block from "../Block";
import styles from "./styles";
const SearchInput = ({
  style,
  image,
  placeHolder,
  onPress,
  onCancel,
  onChangeText,
  value,
  setValue,
}) => {
  const TagView = onPress ? ButtonView : Block;
  return (
    <Block row center>
      <TagView style={[styles.container, style]} onPress={onPress}>
        <Image source={image} />
        {onPress ? (
          <Text p size={13} color={Colors.GREY} style={styles.placeHolder}>
            {placeHolder}
          </Text>
        ) : (
          <TextInput
            placeholder={placeHolder}
            placeholderTextColor={Colors.GREY}
            onChangeText={onChangeText}
            value={value}
            cursorColor={Colors.PRIMARY}
            style={styles.textInputStyle}
          />
        )}
        {value && (
          <ButtonView onPress={() => setValue("")} style={styles.cancelButton}>
            <Image source={Images.icons.cancelIcon} />
          </ButtonView>
        )}
      </TagView>

      {!onPress && (
        <ButtonView onPress={onCancel} style={styles.btnCancelStyle}>
          <Text medium size={13} color={Colors.LIGHT_GREY}>
            Cancel
          </Text>
        </ButtonView>
      )}
    </Block>
  );
};
SearchInput.propTypes = {
  style: PropTypes.object,
  image: PropTypes.any,
  placeHolder: PropTypes.string,
  onPress: PropTypes.func,
  onCancel: PropTypes.func,
  onChangeText: PropTypes.func,
  value: PropTypes.string,
  setValue: PropTypes.func,
};
SearchInput.defaultProps = {
  style: {},
  image: Images.icons.searchIcon,
  placeHolder: "Search Care Provider",
  onPress: undefined,
  onCancel: undefined,
  onChangeText: undefined,
  value: "",
  setValue: undefined,
};
export default SearchInput;
