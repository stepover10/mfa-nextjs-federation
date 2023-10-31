import dynamic from "next/dynamic";

const RemoteNextPage = dynamic(() => import("docs/page"));

const Page_Docs = () => {
  return (
    <div>
      DOCS 앱
      <RemoteNextPage />
    </div>
  )
}

export default Page_Docs;