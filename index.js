import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const Tappable = (props) => {
  const colors = props.colors === undefined ? [] : props.colors;
  const imageSide = props.imageSide === undefined ? "right" : props.imageSide;
  const renderGradientContent = () => {
    return (
      <LinearGradient
        start={props.start}
        end={props.end}
        locations={props.locations}
        colors={colors}
        style={props.styles.gradient}
      >
        {renderNormalContent()}
      </LinearGradient>
    );
  };

  const renderNormalContent = () => {
    return (
      <>
        {props.image && imageSide === "left" && (
          <Image style={props.styles?.image} source={props.image}></Image>
        )}
        <Text style={props.styles.text}>{props.title}</Text>
        {props.image && imageSide === "right" && (
          <Image style={props.styles?.image} source={props.image}></Image>
        )}
      </>
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity ?? 0}
      style={props.styles.container}
      onPress={() => props.onPress()}
    >
      {colors.length > 0 ? renderGradientContent() : renderNormalContent()}
    </TouchableOpacity>
  );
};
