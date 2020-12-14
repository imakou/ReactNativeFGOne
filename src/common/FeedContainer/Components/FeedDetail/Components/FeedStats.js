import React from 'react';
import PropTypes from 'prop-types';
import {CardItem, Left, Right, Body, Button, Icon} from 'native-base';
import {Text} from 'react-native';
import {StyledStatsView} from '../../../../Styles/styledComponent';

const FeedStats = ({stats}) => {
  if (!stats) {
    return null;
  }

  const {star, follow, views} = stats;

  return (
    <CardItem>
      <Left>
        <Button transparent>
          <StyledStatsView>
            <Icon name="star" />
            <Text>{star}</Text>
            <Text> Likes</Text>
          </StyledStatsView>
        </Button>
      </Left>
      <Body>
        <Button transparent>
          <StyledStatsView>
            <Icon name="heart" />
            <Text>{follow}</Text>
            <Text> Follow</Text>
          </StyledStatsView>
        </Button>
      </Body>
      <Right>
        <StyledStatsView>
          <Text>{views}Views</Text>
        </StyledStatsView>
      </Right>
    </CardItem>
  );
};

FeedStats.propTypes = {
  stats: PropTypes.shape({
    star: PropTypes.number.isRequired,
    follow: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};

FeedStats.defaultProps = {
  stats: undefined,
};

export default FeedStats;
