import React from "react";
import PrefixedLink from "./PrefixedLink";

const NavHead = () => {
  return (
    <div>
      <PrefixedLink href="/">
        <a>Home</a>
      </PrefixedLink>
      <PrefixedLink href="/about">
        <a>about</a>
      </PrefixedLink>
      <style jsx>{`
        a {
          margin-left: 5px;
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default NavHead;
