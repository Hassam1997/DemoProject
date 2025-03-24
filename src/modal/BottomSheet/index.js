/** @format */

import React, { useImperativeHandle, useState } from "react";
import { Dimensions, Image, View } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import { Util } from "../../utils";
import { ButtonView } from "../../components";
import { Colors, Metrics } from "../../theme";
import { Block, CircleCheck, Text } from "../../common";

const BottomSheet = (props, forwardedRef) => {
  const [selectedIdentifier, setSelectedIdentifier] = useState("All");
  const [data, setData] = useState({
    description: undefined,
    isVisible: false,
    dataSet: [],
    callback: () => {},
  });

  // hide modal function
  const hideModal = () => {
    setData({ ...data, isVisible: false });
  };

  // show and hide functions for ref
  useImperativeHandle(forwardedRef, () => ({
    show: (options = data) => {
      setData({ ...options, isVisible: true });
    },
    hide: hideModal,
  }));

  const _handleSelectService = (id) => {
    setSelectedIdentifier(id);
  };

  const { title, description, callback, isVisible, dataSet, isCheckbox } = data;

  return (
    <Modal
      backdropTransitionOutTiming={0}
      style={styles.modal}
      isVisible={isVisible}
      useNativeDriver={Util.isPlatformAndroid()}
      coverScreen={true}
      animationIn={"fadeInUp"}
      animationOut={"fadeOutDown"}
      backdropOpacity={0.3}
    >
      <Block style={styles.mainContainer}>
        <Block style={styles.titleView}>
          <Block style={styles.titleSubView}>
            <Text style={styles.title}>{title}</Text>
          </Block>
          <ButtonView
            onPress={() => {
              hideModal();
            }}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </ButtonView>
        </Block>
        <Text style={styles.description}>{description}</Text>
        <Block style={styles.textView}>
          {dataSet.map((item, index) =>
            item?.image ? (
              <ButtonView
                key={index.toString()}
                style={styles.messageView}
                onPress={() => {
                  hideModal();
                  setTimeout(() => {
                    item.onPress && item.onPress();
                  }, 500);
                }}
              >
                <Image source={item?.image} style={styles.imageView} />
                <Text style={[styles.textStyle]}>{item?.title}</Text>
              </ButtonView>
            ) : (
              <ButtonView
                key={index.toString()}
                style={styles.dataView}
                onPress={() => {
                  if (isCheckbox) {
                    _handleSelectService(item?.title);
                    setTimeout(() => {
                      hideModal();
                      callback && callback(item?.title);
                    }, 500);
                  } else {
                    hideModal();
                    setTimeout(() => {
                      callback && callback(item);
                    }, 500);
                  }
                }}
              >
                <Text style={[styles.textStyle]}>{item?.title}</Text>
                {isCheckbox && (
                  <View pointerEvents="none">
                    <CircleCheck
                      containerStyle={styles.iconright}
                      isSelected={
                        selectedIdentifier.includes(item.title) ? true : false
                      }
                    />
                  </View>
                )}
              </ButtonView>
            )
          )}
        </Block>
      </Block>
    </Modal>
  );
};

export default React.forwardRef(BottomSheet);
