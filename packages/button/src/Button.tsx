import { styled } from '@linaria/react';
const Button = () => {
  return (
    <StyledLayoutHeader>
      Packages: Button !
    </StyledLayoutHeader>
  )
}

export default Button;

const StyledLayoutHeader = styled.button`
  border: 1px solid rgb(233, 237, 242);
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 20px;
  color: #738c9f;
`