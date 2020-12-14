import React from 'react';
import PropTypes from 'prop-types';
import {CardItem} from 'native-base';
import {Text} from 'react-native';

const FeedCaption = ({caption, feedMode}) => {
  if (!caption) {
    return null;
  }
  return (
    <CardItem>
      {feedMode ? (
        <Text numberOfLines={2}>{caption}</Text>
      ) : (
        <Text>{caption}</Text>
      )}
    </CardItem>
  );
};

FeedCaption.propTypes = {
  caption: PropTypes.string,
  feedMode: PropTypes.bool,
};

FeedCaption.defaultProps = {
  caption: undefined,
  feedMode: false,
};

export default FeedCaption;
