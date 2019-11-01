import React from "react";
import NavHead from "./NavHead";

export default function Layout(props) {

  return (
    <>
      <div className='wrapper'>
        <NavHead/>
        <div className='children'>
          {props.children}
        </div>
      </div>
      <style jsx>{`
      .wrapper {
        margin: 15px;
        padding: 15px;
        border: 1px solid #ccc;
      }
      .children {
        margin: 15px;
        padding: 15px;
        border: 1px solid #ccc;
      }
      `}</style>
    </>
  )
}
