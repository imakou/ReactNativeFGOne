import styled from 'styled-components/native';

const StyledFeedBodyImage = styled.Image`
  height: 150px;
  width: null;
  flex: 1;
`;

const StyledUserNameText = styled.Text`
  text-transform: capitalize;
  font-size: 16px;
`;

const StyledStatsView = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const StyledHorizontalDivider = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 0.5px;
  margin-bottom: ${({withMargin}) => (withMargin ? '15px' : '0px')};
  margin-top: ${({withMargin}) => (withMargin ? '10px' : '0px')};
  opacity: ${({withOpacity}) => (withOpacity ? '0.45' : '0.6')};
`;

const StyledTextWithMargin = styled.Text`
  margin: ${({margin}) => (margin ? margin : '0')};
`;

export {
  StyledFeedBodyImage,
  StyledUserNameText,
  StyledStatsView,
  StyledHorizontalDivider,
  StyledTextWithMargin,
};
