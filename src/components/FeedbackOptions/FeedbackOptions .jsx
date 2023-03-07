import PropTypes from 'prop-types';
import { ButtonFeedback, ButtonWrapper } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(option => {
        return (
          <div key={option}>
            <ButtonFeedback
              type="button"
              name={option}
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </ButtonFeedback>
          </div>
        );
      })}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
