import React from "react";
const OrderInput = props => {
  const handleChangeOrder = e => {
    const isOrderDESC = e.target.checked;
    let postedAt_DESC = "postedAt_DESC";
    let postedAt_ASC = "postedAt_ASC";
    isOrderDESC ? props.onChange(postedAt_DESC) : props.onChange(postedAt_ASC);
  };
  return (
    <div>
      <label>Order by Lastest</label>
      <input onChange={handleChangeOrder} type="checkbox" />
    </div>
  );
};

export default OrderInput;
