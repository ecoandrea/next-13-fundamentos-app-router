export const metadata = {
  title: "Shop Layout ",
  description: "Shop - Generated by create next app",
  };
  

import TitlePage from "@/components/pagesComponents/TitlePage";

const Id = ({params}) => {
    console.log(params)
  return (
  <>

<TitlePage title="Id"/>

  </>
  )
};

export default Id