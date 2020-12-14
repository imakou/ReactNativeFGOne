import React from 'react';
import {CardItem, H3, Content} from 'native-base';
import {Text, View} from 'react-native';
import {
  StyledHorizontalDivider,
  StyledTextWithMargin,
} from '../../../../Styles/styledComponent';

const FeedComment = ({comments}) => {
  const renderComments = () => {
    return (
      <CardItem>
        <Content>
          {comments.map((comment) => {
            return (
              <View key={comment.id}>
                <Text>ID: {comment.id}</Text>
                <StyledTextWithMargin margin={'5px 0px'}>
                  {comment.text}
                </StyledTextWithMargin>
                <StyledHorizontalDivider withMargin withOpacity />
              </View>
            );
          })}
        </Content>
      </CardItem>
    );
  };
  return (
    <View>
      <StyledHorizontalDivider />
      <CardItem>
        <Content>
          <H3>Comments</H3>
          {comments ? renderComments() : <Text>No comments.</Text>}
        </Content>
      </CardItem>
    </View>
  );
};

export default FeedComment;
