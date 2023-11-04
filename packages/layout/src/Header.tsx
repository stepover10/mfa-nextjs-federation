import styled from 'styled-components';

const Header = () => {
  return (
    <StyledLayoutHeader>
      Packages: Layout Header Component !
    </StyledLayoutHeader>
  )
}

export default Header;

const StyledLayoutHeader = styled.header`
  border: 1px solid rgb(233, 237, 242);
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 20px;
  color: #738c9f;
`