import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Make a component
const AlbumDetails = (props) => {
    return (
      <Card>
        <CardSection>
          <Text>{props.album.title}</Text>
        </CardSection>
      </Card>
    );
  };

export default AlbumDetails;
  