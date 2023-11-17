import React from 'react';
import { styled } from '@linaria/react';

const Card = () => {
  return (
    <StyledWrapper className="css-fx-center">
      CARD Component
    </StyledWrapper>
  );
};

export default Card;

const StyledWrapper = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid var(--color-line);
  border-radius: 14px;
  margin: 10px;
  padding: 10px;
`;