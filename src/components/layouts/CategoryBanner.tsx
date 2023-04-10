import * as React from "react";

type cbanner = {
  banner: any;
};
const CategoryBanner = (cbanner: any) => {
  const bannerimg = cbanner?.banner?.map((ban: any) => {
    // console.log(ban?.c_productBanner?.img?.url,"banner")
    return <img src={ban?.c_productBanner?.img?.url} />;
  });

  return (
    <>
      <div style={{ position: "relative" }}>
        {bannerimg}
        <div
          style={{
            position: "absolute",
            top: "0",
            width: "70%",
            padding: "50px",
          }}
        >
          {cbanner?.banner?.map((res: any) => {
            // console.log(res,"map")
            return (
              <>
                <h2 style={{ paddingBottom: "1.75rem" }}>
                  {res?.c_productBanner?.heading}
                </h2>
                <p>{res?.c_productBanner?.description}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CategoryBanner;
