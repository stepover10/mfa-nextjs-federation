import React from 'react';
import { styled } from '@linaria/react';

const AppHeader = () => {
  return (
    <StyledNavWrapper className="css-fx-center">
      Header Component
    </StyledNavWrapper>
  );
};

export default AppHeader;

const StyledNavWrapper = styled.footer`
  height: 50px;
  border-top: 1px solid var(--color-line);
  background: #1c1919;
`;