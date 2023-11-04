import React from 'react';
import Link from "next/link";

const Page_Test = () => {
  return (
    <div>
      getServerSideProps 렌더 테스트
      <Link href="/">
         홈
      </Link>
    </div>
  )
};

export const getServerSideProps = async () => {
  const swapi = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => {
    // console.log('통신', res);
    return res.json()
  });
  console.log('@Request: ', swapi)
  return {
    props: {}
  };
};

export default Page_Test;
