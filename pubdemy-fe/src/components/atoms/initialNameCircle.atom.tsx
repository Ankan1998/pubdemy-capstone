import { ReactNode, useState } from "react";

type InitialNameProp = {
    name:string
    onClick?:()=>void,
    children?:ReactNode
}

const InitialNameCircle = ({ name,onClick,children }:InitialNameProp) =>{
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (

      <div className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }} onClick={onClick}>
        <span className="h6 m-0">{initials}</span>
        {children}
        </div>


  );
}

export default InitialNameCircle;