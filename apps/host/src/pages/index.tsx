import Link from "next/link";
import styled from "styled-components";

const Page_Index = () => {
  return (
    <SteyldWrapper>
      <Link href="/user">user 페이지로 이동하기</Link>
    </SteyldWrapper>
  )
}

export default Page_Index;

const SteyldWrapper = styled.div`
  border: 1px solid rgb(233, 237, 242);
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 20px;
  a { 
    color: #738c9f;
  }
`;