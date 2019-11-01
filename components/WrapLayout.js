import React from 'react';
import NavHead from './NavHead';

export default function WrapLayout(props) {
  return (
    <>
      <div className="wrapper">
        <NavHead />
        <div className="children">{props.children}</div>
      </div>
      <style jsx>{`
        div.wrapper {
          margin: 15px;
          padding: 15px;
          border: 1px solid #ccc;
        }
        div.children {
          margin: 15px;
          padding: 15px;
          border: 1px solid #ccc;
        }
      `}</style>
    </>
  );
}
