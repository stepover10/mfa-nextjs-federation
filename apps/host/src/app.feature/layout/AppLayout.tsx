import React from 'react';
import AppNavigation from './AppNavigation';
import AppFooter from './AppFooter';
import { styled } from '@linaria/react';
import AppHeader from './AppHeader';

const AppLayout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <StyledWrapper>
        <AppNavigation />
        <main className='app-main'>
          {children}
        </main>
      </StyledWrapper>
      <AppFooter />
    </>
  );
};

export default AppLayout;


const StyledWrapper = styled.main`
  /*
    header,
    footer {
      flex-basis: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  
    footer {
      margin-top: auto;
    }
  */
  
  display: flex;

  .app-main {
    padding: 20px;
    width: 100%;
    height: 200vh;
    display: flex;
    flex: 1;
  }
`;

