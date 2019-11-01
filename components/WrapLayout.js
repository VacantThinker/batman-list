import React from 'react';
import NavHead from './NavHead';

const borderStyle = {
  margin:15, padding: 15, border: '1px solid #ccc'
};

export default function WrapLayout(props) {
  return (
    <>
      <div style={borderStyle}>
        <NavHead />
        <div style={borderStyle}>{props.children}</div>
      </div>
    </>
  );
}

{/*<style jsx>{`*/}
{/*        .wrapper {*/}
{/*          margin: 15px;*/}
{/*          padding: 15px;*/}
{/*          border: 1px solid #ccc;*/}
{/*        }*/}
{/*        .children {*/}
{/*          margin: 15px;*/}
{/*          padding: 15px;*/}
{/*          border: 1px solid #ccc;*/}
{/*        }*/}
{/*      `}</style>*/}
