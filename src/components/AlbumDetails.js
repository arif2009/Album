import React from 'react';
import { Image, View, Text, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Make a component
const AlbumDetails = ({ album }) => {

  const { title, artist, url, image, thumbnail_image } = album;
  const { 
    headerContainerStyle,
    thumbStyle, 
    thumbContainerStyle,
    headerTextStyle,
    imageStyle
  } = style;

    return (
      <Card>
        <CardSection>
          <View style={thumbContainerStyle}>
            <Image style={thumbStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={headerContainerStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={imageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(url)} />
        </CardSection>
      </Card>
    );
  };

  const style = {
    headerContainerStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbStyle: {
      height: 50,
      width: 50
    },
    thumbContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1, //Image will be full width
      width: null //Image will be full width
    }
  };

export default AlbumDetails;
  