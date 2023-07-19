import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import CustomText from '../atoms/customText.atom';



function IconRadio() {
  return (
    <div className="row mt-4 align-items-center" style={{ backgroundColor: '#E8f9ef', border: '2px solid `black`', borderRadius: '5px', padding: '10px' }}>
      <div className="col-auto">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            <FontAwesomeIcon icon={faCoffee} />
          </label>
        </div>
      </div>
      <div className="col align-items-center">
        <strong><CustomText text={'PayTm'}/></strong>
      </div>
    </div>
  );
}

export default IconRadio;
