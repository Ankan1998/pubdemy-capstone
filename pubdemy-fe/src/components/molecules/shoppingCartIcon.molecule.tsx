import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ShoppingCartIconProp = {
    count:number;
}

function ShoppingCartIcon({ count }:ShoppingCartIconProp) {
  return (

    <div className="position-relative">
      <div className="position-absolute top-0 end-0">
        <div className="text-white rounded-circle d-flex align-items-center justify-content-center " style={{backgroundColor:"purple"}}>
          <span>{count}</span>
        </div>
      </div>
      <FontAwesomeIcon icon={faCartShopping} size="2x" />
    </div>

  );
}

export default ShoppingCartIcon;