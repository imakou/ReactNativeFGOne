import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FeedDetail from '../common/FeedContainer/Components/FeedDetail/FeedDetail';

const FeedDetailScreen = (props) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <FeedDetail {...props} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default FeedDetailScreen;
