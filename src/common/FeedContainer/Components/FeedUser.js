import React from 'react';
import PropTypes from 'prop-types';
import {Thumbnail, CardItem, Left, Body} from 'native-base';
import {StyledUserNameText} from '../../Styles/styledComponent';

const FeedUser = ({username, image}) => {
  return (
    <CardItem>
      <Left>
        <Thumbnail small source={{uri: image.profile}} />
        <Body>
          <StyledUserNameText>{username}</StyledUserNameText>
        </Body>
      </Left>
    </CardItem>
  );
};

FeedUser.propTypes = {
  username: PropTypes.string.isRequired,
  image: PropTypes.shape({
    profile: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeedUser;
