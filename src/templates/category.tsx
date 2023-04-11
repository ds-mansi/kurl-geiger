import * as React from "react";
import Banner from "../components/locationDetail/banner";
import Cta from "../components/commons/cta";
import Contact from "../components/locationDetail/contact";
import ApiCall from "../Apis/ApiCall";
import Nearby from "../components/locationDetail/Nearby";
import { CustomFieldDebuggerReactProvider } from "@yext/custom-field-debugger";
import { JsonLd } from "react-schemaorg";
import Opening from "../components/commons/openClose";
import { nearByLocation } from "../types/nearByLocation";
import Logo from "../images/logo-header.svg";
import offerBanner from "../images/offer-banner.jpg";
import IframeMap from "../components/locationDetail/IframeMap";
import "../index.css";

import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";
import { fetch } from "@yext/pages/util";
import Nav from "../components/layouts/Nav";
import Footer from "../components/layouts/footer";
import Menu from "../components/locationDetail/Menu";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import PhotoGallery from "../components/locationDetail/PhotoGallery";
import About from "../components/locationDetail/About";
import Shopnew from "../components/locationDetail/shopnew";
import Breadcrumb from "../components/layouts/Breadcrumb";
import CustomMap from "../components/locationDetail/CustomMap";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import StoreHighlight from "../components/locationDetail/SoreHighlight";
import OpenClose from "../components/commons/openClose";
import Faq from "../components/locationDetail/Faqs";
import { StaticData } from "../../sites-global/staticData";

import {
  apikey_for_entity,
  baseuRL,
  stagingBaseurl,
  AnalyticsEnableDebugging,
  AnalyticsEnableTrackingCookie,
  favicon,
} from "../../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import FeaturesBrand from "../components/locationDetail/FeaturesBrand";
import { Fade, Slide } from "react-awesome-reveal";
import MgmTimber from "../components/locationDetail/MgmTimber";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";
import Header from "../components/layouts/header";
import CategoryBanner from "../components/layouts/CategoryBanner";
import CategoryTemplate from "../components/layouts/CategoryTemplate";
/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "Category",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "c_footwear.name",
      "c_bags.name",
      "c_accessories.name",
      "c_accessories.c_productBanner",
      "c_bags.c_productBanner",
      "c_footwear.c_products",
      "c_accessories.c_products",
      "c_bags.c_products",
      "c_footwear.c_productBanner",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_category"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  // var url = "";
  // var name: any = document.name.toLowerCase();
  // var string: any = name.toString();;
  // let result: any = string.replaceAll(" ", "-");
  // document.dm_directoryParents.map((result: any, i: Number) => {
  //   if (i > 0) {
  //     url += result.slug + "/"
  //   }
  // })
  // if (!document.slug) {
  //   url += `${result}.html`;
  // } else {
  //   url += `${document.slug.toString()}.html`;
  // }

  return document.id;
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`${stagingBaseurl}/${document.id}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: `${
      document.c_meta_title
        ? document.c_meta_title
        : `Kurt Geiger || Category Template..`
    }`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Kurt Geiger || Category Template.`
          }`,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: `${
            //  document._site.c_canonical?document.c_canonical:stagingBaseurl
            "#"
          }`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Kurt Geiger || Category Template.`
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${
            document.c_meta_title
              ? document.c_meta_title
              : `Kurt Geiger || Category Template.`
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${
            document.c_meta_description
              ? document.c_meta_description
              : `Kurt Geiger || Category Template.`
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: `${
            document.c_meta_title
              ? document.c_meta_title
              : `Kurt Geiger || Category Template.`
          }`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:image",
          content: favicon,
        },
      },
    ],
  };
};
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
// export const transformProps: TransformProps<ExternalApiData> = async (
//   data: any
// ) => {
//   var location = `${
//     data.document.yextDisplayCoordinate
//       ? data.document.yextDisplayCoordinate.latitude
//       : data.document.displayCoordinate.latitude
//   },${
//     data.document.yextDisplayCoordinate
//       ? data.document.yextDisplayCoordinate.longitude
//       : data.document.displayCoordinate.longitude
//   }`;

//   const url = `https://liveapi-sandbox.yext.com/v2/accounts/me/entities/geosearch?radius=2500&location=${data.document.yextDisplayCoordinate.latitude},${data.document.yextDisplayCoordinate.longitude}&api_key=93ed4eb95d481501ecc17410efa52034&v=20231201&resolvePlaceholders=true&entityTypes=location&limit=8`;
//   console.log(url);
//   const externalApiData = (await fetch(url).then((res: any) =>
//     res.json()
//   )) as nearByLocation;
//   return { ...data, externalApiData };
// };

type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
}) => {
  const { _site, name, c_footwear, c_accessories, c_bags } = document;
  // console.log(document.c_footwear,"documentc_footwear")

  let templateData = { document: document, __meta: __meta };
  console.log(_site, "DetaipPage");
  return (
    <>
      <JsonLd<locator>
        item={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kurt Geiger ",
          url: stagingBaseurl,
          logo: favicon,
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          // itemListElement: breadcrumbScheme,
        }}
      />

      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
          <Header
            _site={_site}
            lhead={_site?.c_lowerHeader}
            nav={_site?.c_navbar}
          />

          <CategoryBanner banner={document?.c_footwear} />
          <CategoryTemplate
            temp={document?.c_footwear}
            banner2={document?.c_bags}
            access={document?.c_accessories}
          />
          <Footer _site={_site} footer={_site?.c_footer} />
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Location;
