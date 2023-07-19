import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CustomText from './customText.atom';

type DropdownProp = {
    label:string,
    options:{ value: string; label: string }[],
    value:string,
    onChange:(event:any)=>void
}

function Dropdown({ label, options, value, onChange }:DropdownProp) {
  return (
<div className="form-group ">
<strong><CustomText text={label}/></strong><br></br>
      <div style={{ position: 'relative', display: 'inline-block' , width: '200px', marginTop:"10px"}}>
        <select className="form-control rounded-0" value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
}

export default Dropdown;