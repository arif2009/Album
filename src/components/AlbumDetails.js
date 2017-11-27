import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const AlbumDetails = (props) => {
    return (
      <View>
        <Text>{props.album.title}</Text>
      </View>
    );
  };

  export default AlbumDetails;
  