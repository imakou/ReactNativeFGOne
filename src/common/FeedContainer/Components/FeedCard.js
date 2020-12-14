import React from 'react';
import PropTypes from 'prop-types';
import {Content, Card} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FeedUser from './FeedUser';
import FeedImage from './FeedImage';
import FeedCaption from './FeedCaption';

const FeedCard = ({feed}) => {
  const {username, caption, image} = feed;
  const navigation = useNavigation();

  return (
    <Content padder>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FeedDetailScreen', {feed});
        }}>
        <Card>
          <FeedUser username={username} image={image} />
          <FeedImage image={image} />
          <FeedCaption feedMode caption={caption} />
        </Card>
      </TouchableOpacity>
    </Content>
  );
};
FeedCard.propTypes = {
  feed: PropTypes.shape({
    username: PropTypes.string.isRequired,
    caption: PropTypes.string,
    image: PropTypes.object,
  }).isRequired,
};
export default FeedCard;
