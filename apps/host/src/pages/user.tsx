import RemoteNextPage from "app_user/index";

const Page_Docs: any = () => {
  return (
    <div>
      DOCS 앱
      <RemoteNextPage />
    </div>
  )
}
export default Page_Docs;

Page_Docs.getInitialProps = RemoteNextPage.getInitialProps;

/*
  import RemoteDocsIndex from 'app_docs/index';
  const Page_Docs = RemoteDocsIndex;
  Page_Docs.getInitialProps = RemoteDocsIndex.getInitialProps;
  export default Page_Docs;
*/

