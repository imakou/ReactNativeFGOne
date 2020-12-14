import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import FeedContainer from '../common/FeedContainer/FeedContainer';

const FeedListScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <FeedContainer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default FeedListScreen;
