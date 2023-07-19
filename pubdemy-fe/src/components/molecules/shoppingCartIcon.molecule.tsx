import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./sc.css";

type ShoppingCartIconProp = {
    count:number;
}

function ShoppingCartIcon({ count }:ShoppingCartIconProp) {
  return (

    <div className="icon-container">
      <FontAwesomeIcon icon={faCartShopping} className="icon" />
      <div className="number">{count}</div>
    </div>

  );
}

export default ShoppingCartIcon;