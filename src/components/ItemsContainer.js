import Item from "./Item";
import { LEGAL, CONTACT, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={CONTACT} title="CONTACT" />
      <Item Links={LEGAL} title="LEGAL" />
      {/* <Item Links={SUPPORT} title="SUPPORT" /> */}
      <div>
        <img className="h-12 mb-2" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" />
        <img className="h-12" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" />
      </div>
      
    </div>
  );
};

export default ItemsContainer;