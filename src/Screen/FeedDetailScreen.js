import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FeedDetail from '../common/FeedContainer/Components/FeedDetail/FeedDetail';

const FeedDetailScreen = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <FeedDetail />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default FeedDetailScreen;
