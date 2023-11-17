import React from 'react';
import { styled } from '@linaria/react';

const AppFooter = () => {
  return (
    <StyledNavWrapper className="css-fx-center">
      StyledFooter Component
    </StyledNavWrapper>
  );
};

export default AppFooter;

const StyledNavWrapper = styled.footer`
  height: 300px;
  border-top: 1px solid var(--color-line);
  background: #1c1919;
`;