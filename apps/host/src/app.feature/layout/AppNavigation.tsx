import React from 'react';
import { styled } from '@linaria/react';

const AppNavigation = () => {
  return (
    <StyledNavWrapper className="css-fx-center">
      Aside Component
    </StyledNavWrapper>
  );
};

export default AppNavigation;

const StyledNavWrapper = styled.aside`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 250px;
  border-right: 1px solid var(--color-line);
`;