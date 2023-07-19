import React from 'react';

type TextButtonProp = {
    onClick:()=>any,
    text:string,
    isDisabled:boolean
}

function TextButton({ onClick, text,isDisabled }:TextButtonProp) {
  return (
    <button onClick={onClick} disabled={isDisabled} style={{ backgroundColor: 'transparent', border: 'none', textDecoration: 'none', cursor: 'pointer', color:'purple' }}>
      {text}
    </button>
  );
}

export default TextButton;