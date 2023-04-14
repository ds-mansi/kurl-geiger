import * as React from "react";
import { stagingBaseurl } from "../../../sites-global/global";
import HeaderMarker from "../../images/HeaderMarker.svg";
import headerMap from "../../images/HeaderMap.svg";

type props = {
  _site: any;
  logo: any;
  nav: any;
  lhead: any;
};

const Header = (props: any) => {
  // console.log(props, "props");
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  // console.log(props?.lhead?.storeLogoImg, "limg");
  // upper header
  // const uphead=props?.c_topHead
  const icon = props?.lhead?.icon?.map((ico: any) => {
    // console.log(ico, "icon");
    return <img src={ico?.url} alt=""/>;
  });

  // nav
  const navbar = props?.nav?.navName?.map((res: any) => {
    // console.log(res.label,"label")
    return (
      <ul>
        <li style={{ paddingRight: "25px" }}>
          <a href={res?.link}>{res?.label}</a>
        </li>
      </ul>
    );
  });
  // console.log(props?.lhead?.mapMarker, "mapMarker");
  return (
    <>
      <div>
        <div>
          <h3 className="text-center">{props?._site?.c_topHead}</h3>
        </div>
        <div className="flex m-auto pt-4 px-5 bg-[#f8f6f7]">
          <div className="flex items-center">
            <img
              src={props?.lhead?.flagImg?.url}
              style={{ height: "20px", paddingRight: "5px" }}
              alt=""
            />

            <img src={headerMap} alt=""/>
            <p>{props?.lhead?.storeLabel}</p>
          </div>
          <a href="/index.html">
            <img
              src={props?.lhead?.storeLogoImg?.url}
              style={{ width: "22%", margin: "auto" }}
              alt=""
            />
          </a>
          <a href="#" style={{ display: "flex", height: "25px" }}>
            {icon}
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
            backgroundColor: "#f8f6f7",
            paddingBottom: "10px",
            fontSize: "15px",
          }}
        >
          {navbar}
        </div>
      </div>
    </>
  );
};

export default Header;
