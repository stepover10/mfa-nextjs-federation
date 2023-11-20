import React from 'react';
import {Button} from "@pkg/button";

const Page_Index = () => {
  return (
    <div>
      마이크로 프론트 엔드 유저 페이지 테스트 버튼
      <br/>
      <br/>
      <Button/>
      <br/>
      <br/>
      <br/>
      <Button/>
    </div>
  );
};

export default Page_Index;

/* 서버 사이드의 데이터를 MF를 사용하기 위해서 getInitialProps 사용 */
Page_Index.getInitialProps = async () => {
  return {
    appName: "유저_페이지",
    option: "micro front ssr page !"
  }
}

/*
export const getServerSideProps = async () => {
  return {
    props: {
      appName: 'docs',
      option: "_test!"
    },
  };
};*/
