import React, { useEffect, useState } from 'react';
import CustomText from '../atoms/customText.atom';
import IconRadio from './radioPayment.organism';
import { useValidateCreditCardNumber } from '../../customHooks/creditcardValidation.hook';
import { useCheckoutValidationContext } from '../../context/checkoutValidation.context';

function CreditCardForm() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  let isValidCard = useValidateCreditCardNumber;

  const handleNameChange = (event:any) => {
    setName(event.target.value);
  };

  const handleCardNumberChange = (event:any) => {
    setCardNumber(event.target.value);
  };

  const handleSecurityCodeChange = (event:any) => {
    setSecurityCode(event.target.value);
  };

  const handleExpirationDateChange = (event:any) => {
    setExpirationDate(event.target.value);
  };
  const {setValidationState} = useCheckoutValidationContext();

  useEffect(() => {

    if(name.length!==0 && isValidCard(cardNumber) && securityCode.length===3 && expirationDate.length!==0){
        setValidationState(true)
    }

  }, [name,securityCode,expirationDate,cardNumber]);

  return (
    <div><h5><CustomText text={'Payment Method'} styles={{paddingLeft:"3%",fontWeight:"700"}}/></h5>
    <div style={{ border: '1px solid', margin:'3%',padding: '3%', borderRadius: '0px' }}>
      <div className="form-group pb-2">
        <label>Name on Card</label>
        <input
          type="text"
          className="form-control rounded-0"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group pb-3">
        <label>Card Number</label>
        <input
          type="text"
          className="form-control rounded-0"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="form-group" style={{ flex: '0 0 48%' }}>
          <label>Security Code</label>
          <input
            type="text"        className="form-control rounded-0"
            value={securityCode}
            onChange={handleSecurityCodeChange}
          />
        </div>
        <div className="form-group" style={{ flex: '0 0 48%' }}>
          <label>Expiration Date</label>
          <input
            type="text"
            className="form-control rounded-0"
            value={expirationDate}
            onChange={handleExpirationDateChange}
          />
        </div>
      </div><div className='m-2'><IconRadio/><IconRadio/><IconRadio/><IconRadio/></div>
    </div>
    </div>
  );
}

export default CreditCardForm;
