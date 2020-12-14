import React from 'react';
import {Spinner} from 'native-base';
import axios from 'axios';
import {useQuery} from 'react-query';
import {View} from 'react-native';
import FeedCard from './Components/FeedCard';

const FeedContainer = () => {
  const {isLoading, data: feeds} = useQuery('fetchFeed', () =>
    axios('https://staging-app.figure1.com/mock/feed').then(
      (res) => res.data.feed,
    ),
  );
  const feedCards = () => {
    return feeds.map((feed) => {
      return <FeedCard key={feed.id} feed={feed} />;
    });
  };
  return <View>{isLoading ? <Spinner /> : feedCards()}</View>;
};
export default FeedContainer;
