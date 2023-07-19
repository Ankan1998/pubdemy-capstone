import React, { useState } from 'react';
import Dropdown from '../atoms/dropdown.atom';
import CustomText from '../atoms/customText.atom';

function CountryStateDropdown() {
  const [country, setCountry] = useState('India');
  const [state, setState] = useState('West Bengal');

  const handleCountryChange = (event:any) => {
    setCountry(event.target.value);
  };

  const handleStateChange = (event:any) => {
    setState(event.target.value);
  };

  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
  ];

  const stateOptions = [
    { value: 'West Bengal', label: 'West Bengal' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Delhi', label: 'Delhi' },
  ];

  return (
    <div className="row p-3">
        <h5><strong><CustomText text={"Billing Address"}/></strong></h5>
      <div className="col">
        <Dropdown
          label="Country"
          options={countryOptions}
          value={country}
          onChange={handleCountryChange}
        />
      </div>
      <div className="col">
        <Dropdown
          label="State"
          options={stateOptions}
          value={state}
          onChange={handleStateChange}
        />
      </div>
    </div>
  );
}

export default CountryStateDropdown;