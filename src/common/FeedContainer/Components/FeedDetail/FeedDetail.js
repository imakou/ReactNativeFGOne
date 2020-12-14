import React from 'react';
import {Content, Card} from 'native-base';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import FeedStats from './Components/FeedStats';
import FeedComment from './Components/FeedComment';
import FeedUser from '../FeedUser';
import FeedImage from '../FeedImage';
import FeedCaption from '../FeedCaption';

const FeedDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    params: {feed},
  } = route;
  const {username, caption, image, stats, comments} = feed;

  useEffect(() => {
    navigation.setOptions({
      title: `${username}'s Post`,
    });
  });

  return (
    <Content padder>
      <Card>
        <FeedUser username={username} image={image} />
        <FeedImage image={image} />
        <FeedStats stats={stats} />
        <FeedCaption caption={caption} />
        <FeedComment comments={comments} />
      </Card>
    </Content>
  );
};

export default FeedDetail;
