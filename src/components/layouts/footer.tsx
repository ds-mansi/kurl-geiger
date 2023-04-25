import * as React from "react";
type props = {
  _site: any;
  footer: any;
};
// props call
const Footer = (props: any) => {
  // console.log(props, "abc");
  //   console.log("copyright",props.copy.copyright)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };

  const footh1 = props?.footer?.footerCta1?.map((foo: any) => {
    // console.log(foo.label, "foo");
    return (
      <>
        <h3 style={{ paddingBottom: "5px" }}>
          <a href={foo?.link}>{foo?.label}</a>
        </h3>
      </>
    );
  });
  const footh2 = props?.footer?.footerCta2?.map((foo1: any) => {
    // console.log(foo1.label, "foo");
    return (
      <>
        <h3 style={{ paddingBottom: "5px" }}>
          <a href={foo1?.link}>{foo1?.label}</a>
        </h3>
      </>
    );
  });
  const footh3 = props?.footer?.footerCta3?.map((foo2: any) => {
    // console.log(foo2.label, "foo");
    return (
      <>
        <h3 style={{ paddingBottom: "5px" }}>
          <a href={foo2?.link}>{foo2?.label}</a>
        </h3>
      </>
    );
  });

  // console.log(props?._site?.c_terms, "terms");

  return (
    <>
      <div style={{ backgroundColor: "#f2f2f2", clear: "both" }}>
        <div
          className="flex pl-9"
          style={{ paddingTop: "40px", color: "#333333", width: "100%" }}
        >
          {/* footer nav start */}
          <div className="flex" style={{ width: "60%" }}>
            <div>
              <h3 className="footernav">{props?.footer?.footerHeading}</h3>
              <ul className="footerp">
                <li>{footh1}</li>
              </ul>
            </div>
            <div>
              <h3 className="footernav">{props?.footer?.footerHeading2}</h3>
              <ul className="footerp">
                <li>{footh2}</li>
              </ul>
            </div>
            <div>
              <h3 className="footernav">{props?.footer?.footerHeading3}</h3>
              <ul className="footerp">
                <li>{footh3}</li>
              </ul>
            </div>
          </div>
          {/* footer nav end */}
          {/* footer kind section start */}
          <div style={{ width: "40%" }}>
            <p
              style={{
                fontSize: "16px",
                marginRight: "10%",
                paddingBottom: "10px",
                fontWeight: "bold",
              }}
            >
              {props?._site?.c_signUp?.signUpText}
            </p>
            <div className="p-1 ">
              <form>
                <input
                  type="text"
                  placeholder="Enter your Email..."
                  className="border-b-2"
                  style={{ width: "60%", padding: "5px", marginRight: "5px" }}
                />
                <a
                  href="#"
                  className="signup-btn"
                  style={{
                    padding: "8px 45px",
                    border: "1px solid black",
                    backgroundColor: "#ffffff",
                  }}
                >
                  SIGN UP
                </a>
              </form>
              <div className="p-2">
                <input
                  type="radio"
                  id="Men"
                  name="gender"
                  value="Men"
                />
                <label style={{fontSize:'20px',paddingRight:"20px",}}>Men</label>

                <input type="radio" id="Women" name="gender" value="Women" />
                <label style={{fontSize:'20px'}}>Women</label>
              </div>
            </div>
            <p style={{ fontSize: "16px", marginRight: "10%" }}>
              {props?._site?.c_signUp?.privacyPolicy}
            </p>
          </div>
        </div>
        {/* footer kind section end */}
        {/* t and c section start  */}
        <div
          className="flex"
          style={{ paddingBottom: "45px", justifyContent: "center" }}
        >
          <p style={{ paddingRight: "25px", fontSize: "15px" }}>
            {props?._site?.c_terms?.tAndC}
          </p>

          <a
            href={props?._site?.c_terms?.preference?.link}
            style={{ textDecoration: "underline" }}
          >
            {props?._site?.c_terms?.preference?.label}
          </a>
        </div>
        {/* t and c end */}
      </div>
    </>
  );
};

export default Footer;
