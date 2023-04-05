import * as React from "react";
type props = {
  _site: any;
  footer: any;
};
// props call
const Footer = (props: any) => {
  console.log(props, "abc");
  //   console.log("copyright",props.copy.copyright)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };

  const footh1 = props?.footer?.footerCta1?.map((foo: any) => {
    console.log(foo.label, "foo");
    return <h3>{foo?.label}</h3>;
  });
  const footh2 = props?.footer?.footerCta2?.map((foo1: any) => {
    console.log(foo1.label, "foo");
    return <h3>{foo1?.label}</h3>;
  });
  const footh3 = props?.footer?.footerCta3?.map((foo2: any) => {
    console.log(foo2.label, "foo");
    return <h3>{foo2?.label}</h3>;
  });

  console.log(props.footer.footerHeading, "hvsajdgvb");

  return (
    <>
      <div className="flex">
        <div>
          <h3>{props?.footer?.footerHeading}</h3>
          <p>{footh1}</p>
        </div>
        <div>
          <h3>{props?.footer?.footerHeading2}</h3>
          <p>{footh2}</p>
        </div>
        <div>
          <h3>{props?.footer?.footerHeading3}</h3>
          <p>{footh3}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
