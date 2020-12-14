import React from 'react';
import PropTypes from 'prop-types';
import {CardItem} from 'native-base';
import {Text} from 'react-native';

const FeedCaption = ({caption}) => {
  if (!caption) {
    return null;
  }
  return (
    <CardItem>
      <Text>{caption}</Text>
    </CardItem>
  );
};

FeedCaption.propTypes = {
  caption: PropTypes.string,
};

FeedCaption.defaultProps = {
  caption: undefined,
};

export default FeedCaption;
