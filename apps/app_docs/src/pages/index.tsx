import React from 'react';

const Page_Index = () => {
  return (
      <div>
        docs micro app page !
      </div>
  );
};

export default Page_Index;

/* 서버 사이드의 데이터를 MF를 사용하기 위해서 getInitialProps 사용 */
Page_Index.getInitialProps = async () => {
  return {
    appName: "docs_index",
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
