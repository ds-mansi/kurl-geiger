import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";
import Banner from "../locationDetail/banner";

type Props = {
  title?: string;
  _site?: any;
  global: any;
  children?: React.ReactNode;
  banner?:any;
};
const PageLayout = ({ title, _site, global, children, banner}: Props) => {
  // console.log(banner.url,"Bannerurl")


  return <>
  <div>
    <img src={banner?.url} style={{width:"100%"}} alt=""/>
  </div>
  </>
};

export default PageLayout;
