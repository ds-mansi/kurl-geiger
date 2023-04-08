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
    return <h3 style={{ paddingBottom: "5px" }}>{foo?.label}</h3>;
  });
  const footh2 = props?.footer?.footerCta2?.map((foo1: any) => {
    // console.log(foo1.label, "foo");
    return <h3 style={{ paddingBottom: "5px" }}>{foo1?.label}</h3>;
  });
  const footh3 = props?.footer?.footerCta3?.map((foo2: any) => {
    // console.log(foo2.label, "foo");
    return <h3 style={{ paddingBottom: "5px" }}>{foo2?.label}</h3>;
  });

  console.log(props?._site?.c_terms, "terms");

  return (
    <>
	<div style={{backgroundColor:"#f2f2f2",clear:"both"}}>
      <div
        className="flex pl-9"
        style={{ paddingTop: "40px", color: "#333333",width: "100%" }}
      >
        <div className="flex" style={{ width: "60%" }}>
          <div>
            <h3 className="footernav">{props?.footer?.footerHeading}</h3>
            <p className="footerp">{footh1}</p>
          </div>
          <div>
            <h3 className="footernav">{props?.footer?.footerHeading2}</h3>
            <p className="footerp">{footh2}</p>
          </div>
          <div>
            <h3 className="footernav">{props?.footer?.footerHeading3}</h3>
            <p className="footerp">{footh3}</p>
          </div>
        </div>
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
          <p style={{ fontSize: "16px", marginRight: "10%" }}>
            {props?._site?.c_signUp?.privacyPolicy}
          </p>
        </div>
      </div>
      <div className="flex" style={{paddingBottom:"45px",justifyContent:"center"}}>
        <p style={{paddingRight:"25px",fontSize:"15px"}}>{props?._site?.c_terms?.tAndC}</p>
        <a href={props?._site?.c_terms?.preference?.link} style={{textDecoration:"underline"}}>
          {props?._site?.c_terms?.preference?.label}
        </a>
      </div>
	  </div>
    </>
  );
};

export default Footer;
