import React from "react";

interface Props {
  dark: boolean;
}

const Footer = (props: Props) => {
  const { dark } = props;
  return (
    <div className={`footer ${dark && "dark"} `}>
      <span>&copy;</span>
      <p>2021 Shelf. ALL RIGHTS RESERVED </p>
    </div>
  );
};

export default Footer;
