import React, { useState, useCallback } from "react";
import { Block, Text } from "../../common";
import { Colors } from "../../theme";
import styles from "./styles";

const ReadMoreText = ({ text }) => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setLengthMore(e.nativeEvent.lines.length >= 2); //to check the text is more than 4 lines or not
  }, []);

  return (
    <Block style={styles.readmoreStyle}>
      <Text
        medium
        size={12}
        color={Colors.LIGHT_GREY}
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 2}
        style={styles.readmoreText}
      >
        {!textShown ? `${text.substring(0, 70)}` : `${text}`}{" "}
        {lengthMore ? (
          <Text
            medium
            size={12}
            color={Colors.TEXT_GREY}
            onPress={toggleNumberOfLines}
          >
            {textShown ? "...Read less" : "...Read more"}
          </Text>
        ) : null}
      </Text>
    </Block>
  );
};

export default ReadMoreText;
