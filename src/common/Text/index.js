import React from "react";
import { I18nManager, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { Colors, FontClass as Fonts } from "../../theme";
import normalize from "../../helpers";
import { Util } from "../../utils";
function Typography({
  style,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  body,
  small,
  muted,
  neutral,
  size,
  color,
  bold,
  samiBold,
  medium,
  black,
  extraBold,
  extraLight,
  light,
  thin,
  italic,
  center,
  children,
  ...rest
}) {
  return (
    <Text
      style={[
        styles.txt,
        h1 && { fontSize: normalize(44) },
        h2 && { fontSize: normalize(38) },
        h3 && { fontSize: normalize(30) },
        h4 && { fontSize: normalize(24) },
        h5 && { fontSize: normalize(21) },
        h6 && { fontSize: normalize(18) },
        p && { fontSize: normalize(16) },
        body && { fontSize: normalize(14) },
        small && { fontSize: normalize(12) },
        muted && { color: Colors.MUTED },
        neutral && { color: Colors.NEUTRAL },
        size && { fontSize: size },
        color && { color },
        italic && { fontStyle: "italic" },
        bold && { ...Fonts.BoldFont() },
        samiBold && { ...Fonts.SemiBoldFont() },
        medium && { ...Fonts.MediumFont() },
        black && { ...Fonts.BlackFont() },
        extraBold && { ...Fonts.ExtraBoldFont() },
        extraLight && { ...Fonts.ExtraLightFont() },
        light && { ...Fonts.LightFont() },
        thin && { ...Fonts.ThinFont() },
        center && { textAlign: "center" },
        style && style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}
Typography.defaultProps = {
  children: null,
  style: null,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  p: false,
  body: false,
  small: false,
  size: 0,
  color: null,
  muted: false,
  bold: false,
  samiBold: false,
  medium: false,
  black: false,
  extraBold: false,
  extraLight: false,
  light: false,
  thin: false,
  italic: false,
};
Typography.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  p: PropTypes.bool,
  body: PropTypes.bool,
  small: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  muted: PropTypes.bool,
  bold: PropTypes.bool,
  samiBold: PropTypes.bool,
  medium: PropTypes.bool,
  black: PropTypes.bool,
  extraBold: PropTypes.bool,
  extraLight: PropTypes.bool,
  light: PropTypes.bool,
  thin: PropTypes.bool,
  italic: PropTypes.bool,
};
const styles = StyleSheet.create({
  txt: {
    color: Colors.BLACK,
    ...Fonts.font(Fonts.FontFamily.default, Fonts.Type.Regular),
    // writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
});
export default Typography;
