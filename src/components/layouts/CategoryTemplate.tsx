import * as React from "react";
import { StaticData } from "../../../sites-global/staticData";

type template = {
  temp: any;
  banner2: any;
  access: any;
  vac:any;
  off:any;
};
const CategoryTemplate = (template: any) => {
  console.log(template,"temp")
  const temp = template?.temp?.map((tem: any) => {
    return tem?.c_products?.map((cat: any) => {
      // console.log(cat.img,"url")
      return (
        <>
          <div
            style={{ width: "25%", height: "10%", paddingLeft: "20px" }}
            className="images"
          >
            <a href="#">
              <img src={cat?.img?.url} alt="" />
            </a>
            <br />
            <div style={{ textAlign: "center" }}>
              <a href="#">
                <p style={{ fontWeight: "bold" }}>{cat?.productName}</p>
                <p>{cat?.brandName}</p>
                <p>
                  {" "}
                  {StaticData.Dollar}
                  {cat?.price}
                </p>
                <p className="category-btn">
                  <a href={cat?.cTA?.link}>{cat?.cTA?.label}</a>
                </p>
              </a>
            </div>
          </div>
        </>
      );
    });
  });
  const bannerimg = template?.banner2?.map((img: any) => {
    // console.log(img?.c_productBanner, "abcd");
    return (
      <>
        <div style={{ position: "relative" }}>
          <img src={img?.c_productBanner?.img?.url} />
          <div
            style={{
              position: "absolute",
              top: "0",
              width: "60%",
              padding: "50px",
            }}
          >
            <h2 className="pb-3 font-bold">{img?.c_productBanner?.heading}</h2>
            <p>{img?.c_productBanner?.description}</p>
          </div>
        </div>
      </>
    );
  });
  const bags = template?.banner2?.map((bag: any) => {
    return bag?.c_products?.map((b: any) => {
      // console.log(b.img,"bimg")
      return (
        <>
          <div
            style={{ width: "25%", height: "10%", paddingLeft: "20px" }}
            className="images"
          >
            <a href="#">
              <img src={b?.img?.url} />
            </a>
            <div style={{ textAlign: "center" }}>
              <a href="#">
                <p style={{ fontWeight: "bold" }}>{b?.productName}</p>{" "}
              </a>
              <a href="#">
                <p>{b?.brandName}</p>
              </a>
              <a href="#">
                <p>
                  {" "}
                  {StaticData.Dollar}
                  {b?.price}
                </p>
              </a>
              <p className="category-btn">
                <a href={b?.cTA?.link}>{b?.cTA?.label}</a>
              </p>
            </div>
          </div>
        </>
      );
    });
  });
  const banneraccessories = template?.access?.map((acc: any) => {
    // console.log(acc, "acc");
    return (
      <>
        <div style={{ position: "relative" }}>
          <img src={acc?.c_productBanner?.img?.url} />
          <div
            style={{
              position: "absolute",
              top: "0",
              width: "60%",
              padding: "50px",
            }}
          >
            <h2 className="pb-3 font-bold">{acc?.c_productBanner?.heading}</h2>
            <p>{acc?.c_productBanner?.description}</p>
          </div>
        </div>
      </>
    );
  });
  const accessories = template?.access?.map((a: any) => {
    return a?.c_products?.map((ac: any) => {
      // console.log(b.img,"bimg")
      return (
        <>
          <div
            style={{ width: "25%", height: "10%", paddingLeft: "20px" }}
            className="images"
          >
            <a href="#">
              <img src={ac?.img?.url} />
            </a>
            <div style={{ textAlign: "center" }}>
              <a href="#">
                <p style={{ fontWeight: "bold" }}>{ac?.productName}</p>{" "}
              </a>
              <a href="#">
                <p>{ac?.brandName}</p>
              </a>
              <a href="#">
                <p>
                  {" "}
                  {StaticData.Dollar}
                  {ac?.price}
                </p>
              </a>
              <p className="category-btn">
                <a href={ac?.cTA?.link}>{ac?.cTA?.label}</a>
              </p>
            </div>
          </div>
        </>
      );
    });
  });
  // vacation
  const vancantbanner=template?.vac?.map((v: any)=>{
    // console.log(v,"vaca")
    return(
      <div style={{ position: "relative" }}>
      <img src={v?.c_productBanner?.img?.url} />
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "60%",
          padding: "50px",
        }}
      >
        <h2 className="pb-3 font-bold">{v?.c_productBanner?.heading}</h2>
        <p>{v?.c_productBanner?.description}</p>
      </div>
    </div>
    )
  })

  const vacant=template?.vac?.map((va:any)=>{
    return va?.c_products?.map((b: any) => {
      // console.log(b.img,"bimg")
      return (
        <>
          <div
            style={{ width: "25%", height: "10%", paddingLeft: "20px" }}
            className="images"
          >
            <a href="#">
              <img src={b?.img?.url} />
            </a>
            <div style={{ textAlign: "center" }}>
              <a href="#">
                <p style={{ fontWeight: "bold" }}>{b?.productName}</p>{" "}
              </a>
              <a href="#">
                <p>{b?.brandName}</p>
              </a>
              <a href="#">
                <p>
                  {" "}
                  {StaticData.Dollar}
                  {b?.price}
                </p>
              </a>
              <p className="category-btn">
                <a href={b?.cTA?.link}>{b?.cTA?.label}</a>
              </p>
            </div>
          </div>
        </>
      );
    });
  })

  // offer

  const offer=template?.off?.map((of:any)=>{
    return of?.c_products?.map((b: any) => {
      // console.log(b.img,"bimg")
      return (
        <>
          <div
            style={{ width: "25%", height: "10%", paddingLeft: "20px" }}
            className="images"
          >
            <a href="#">
              <img src={b?.img?.url} />
            </a>
            <div style={{ textAlign: "center" }}>
              <a href="#">
                <p style={{ fontWeight: "bold" }}>{b?.productName}</p>{" "}
              </a>
              <a href="#">
                <p>{b?.brandName}</p>
              </a>
              <a href="#">
                <p>
                  {" "}
                  {StaticData.Dollar}
                  {b?.price}
                </p>
              </a>
              <p className="category-btn">
                <a href={b?.cTA?.link}>{b?.cTA?.label}</a>
              </p>
            </div>
          </div>
        </>
      );
    });
  })
  return (
    <>
      <div className=" flex flex-wrap pb-3 pt-4">{temp}</div>
      <div>{bannerimg}</div>
      <div className=" flex flex-wrap pb-3 pt-4">{bags}</div>
      <div>{banneraccessories}</div>
      <div className=" flex flex-wrap pb-3 pt-4">{accessories}</div>
      <div>{vancantbanner}</div>
      <div className=" flex flex-wrap pb-3 pt-4">{vacant}</div>
      <div className=" flex flex-wrap pb-3 pt-4">{offer}</div>
      
    </>
  );
};
export default CategoryTemplate;
