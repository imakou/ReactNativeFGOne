import React from 'react';
import PropTypes from 'prop-types';
import {CardItem} from 'native-base';
import {StyledFeedBodyImage} from '../../Styles/styledComponent';

const FeedImage = ({image}) => {
  const feedBodyImgSrc = image.post
    ? image.post
    : 'https://via.placeholder.com/400x270?text=No+Post+Image';

  return (
    <CardItem cardBody>
      <StyledFeedBodyImage source={{uri: feedBodyImgSrc}} />
    </CardItem>
  );
};

FeedImage.propTypes = {
  image: PropTypes.shape({
    post: PropTypes.string,
  }).isRequired,
};

export default FeedImage;
