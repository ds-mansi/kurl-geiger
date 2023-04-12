import * as React from "react";
type shops = {
  props: any;
  shop: any;
};

const shopnew = (res: shops) => {
  // console.log(res, "restd");
  return (
    <>
      <div>
        <h4 className="underline text-center">
          <a href="#">{res?.props}</a>
        </h4>
      </div>
      <div className="w-full">
      <div className="flex">
        {res?.shop?.map((sho: any) => {
          // console.log(sho.shopImg.url,"img")
          return (
            <>
              <img
                src={sho?.shopImg?.url}
                style={{ height: "448px", width: "447px" }}
              />
            </>
          );
        })}
      </div>
      <div className="flex">
        {res?.shop?.map((sho: any) => {
          return (
            <ul style={{ margin: "auto" }}>
              <li>
                <h2>{sho?.shopTxt}</h2>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="flex">
        {res?.shop?.map((sho: any) => {
          return (
            <ul
              style={{
                margin: "auto",
                textDecoration: "underline",
                fontSize: "13px",
              }}
            >
              <li>
                <p>
                  <a href={sho?.shopCta?.link}>{sho?.shopCta?.label}</a>
                </p>
              </li>
            </ul>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default shopnew;
