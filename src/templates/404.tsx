// src/template/404.tsx
import {
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  GetPath,
  Template,
  TemplateConfig,
} from "@yext/pages";
import * as React from "react";
import { favicon } from "../../sites-global/global";
import { StaticData } from "../../sites-global/staticData";
import PageLayout from "../components/layouts/PageLayout";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import "../index.css";
import image from "../images/image.jpg";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
export const config: TemplateConfig = {
  stream: {
    $id: "404",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: ["name", "c_globalSlider"],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["global-data"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

// The path must be exactly 404.html
export const getPath: GetPath<TemplateProps> = () => {
  return "404.html";
};

// Add a title to the page
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Page Not Found",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
    ],
  };
};

// Template that will show as the page
const FourOhFour: Template<TemplateRenderProps> = ({ document }) => {
  const { _site } = document;
  // console.log(_site, "_site");
  const slide = _site?.c_globalSlider?.map((slid: any) => {
    return (
      <ul>
        <li>
          <img src={slid?.sliderImg?.url} style={{ height: "19.75rem" }} alt=""/>
        </li>
      </ul>
    );
  });

  const text = _site?.c_globalSlider?.map((txt: any) => {
    return (
      <ul className="m-auto ">
        <li>
          <p>
            <a href="#">{txt.imgText}</a>
          </p>
        </li>
      </ul>
    );
  });

  const name = _site?.c_globalSlider?.map((nm: any) => {
    return (
      <ul className="m-auto font-bold">
        <li>
          <p>
            <a href={nm?.brandName?.link}>{nm?.brandName?.label}</a>
          </p>
        </li>
      </ul>
    );
  });
  const pname = _site?.c_globalSlider?.map((p: any) => {
    return (
      <ul className="m-auto">
        <li>
          <p>
            <a href={p?.productName?.link}>{p?.productName?.label}</a>
          </p>
        </li>
      </ul>
    );
  });
  const price = _site?.c_globalSlider?.map((pr: any) => {
    return (
      <ul className="m-auto">
        <li>
          <p>
            <a href={pr?.productPrices?.link}>{pr?.productPrices?.label}</a>
          </p>
        </li>
      </ul>
    );
  });
  return (
    <>
      <Header
        _site={_site}
        lhead={_site?.c_lowerHeader}
        nav={_site?.c_navbar}
      />
      <div>
        <img src={image} style={{ position: "relative", width: "100%" }} alt=""/>
        <div className="content-list">
          <div className="container">
            <div
              className="sec-title text-center "
              style={{
                position: "absolute",
                bottom: "0",
                top: "0",
                left: "0",
                right: "0",
                textAlign: "center",
                marginTop: "25%",
              }}
            >
              <h1 className="" style={{ textAlign: "center", color: "white" }}>
                {StaticData.PagenotFound}
              </h1>
              <p className="text-[#fff]">{StaticData.cantfind_page}.</p>
              <p className="text-[#fff]">{StaticData.Youcouldtry}</p>
              <div className="button-bx max-w-[45rem] !mx-auto !mt-5">
                {/* <a className="btn" href="javascript:history.back()">{StaticData.Previuspage} &gt;</a> */}
                <a className="btn" href="/">
                  {StaticData.homePage} &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center">Some more drops for you...</p>
        <br />
        <div style={{ marginBottom: "5%" }}>
          <div className="flex ">{slide}</div>
          <div className="flex bg-[#f7f7f9]">{text}</div>
          <div className="flex ">{name}</div>
          <div className="flex ">{pname}</div>
          <div className="flex ">{price}</div>
        </div>
      </div>
      <Footer _site={_site} footer={_site?.c_footer} />
    </>
  );
};

export default FourOhFour;
