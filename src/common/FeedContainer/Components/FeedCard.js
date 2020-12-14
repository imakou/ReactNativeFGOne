import React from 'react';
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
          <FeedCaption caption={caption} />
        </Card>
      </TouchableOpacity>
    </Content>
  );
};
export default FeedCard;
