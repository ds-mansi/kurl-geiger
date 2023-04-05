import * as React from "react";
type props = {
  _site: any;
  footer: any;
};
// props call
const Footer = (props: any) => {
  console.log(props, "links");
  //   console.log("copyright",props.copy.copyright)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };

  const footh = props?.footer?.map((foo: any) => {
    // console.log(foo.footerHeading,"foo")
    return <h3>{foo?.footerHeading}</h3>;
  });

  const footd = props?.footer?.map((foo: any) => {
    foo?.footerCta?.map((res: any) => {
      console.log(res.label, "res");
      return (
        <ul>
          <li>
            <a href={res.link}>{res.label}</a>
          </li>
        </ul>
      );
    });
  });

  //   console.log(props._site.c_footerRights,"hvsajdgvb")

  return (
    <>
      <div className="flex">{footh}</div>
      <div >{footd}</div>
    </>
  );
};

export default Footer;
