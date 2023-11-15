import styled from 'styled-components';

export const Footer = () => {
  return (
    <StyledLayoutHeader>
      Footer Test
    </StyledLayoutHeader>
  )
}

export default Footer;

const StyledLayoutHeader = styled.header`
  border: 1px solid rgb(233, 237, 242);
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 20px;
  color: #738c9f;
`