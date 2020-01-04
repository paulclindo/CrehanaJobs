import React from 'react';
const OrderInput = (props) => {
  const handleChangeOrder = (e) => {
    const isOrderDESC = e.target.checked
    const postedAt_DESC = "postedAt_DESC"
    const postedAt_ASC = "postedAt_ASC"
    isOrderDESC ? props.onChange(postedAt_ASC) : props.onChange(postedAt_DESC)
  }
  return (
    <div>
      <label>Order by</label>
      <input onChange={handleChangeOrder} type="checkbox" />
    </div>
  );
}

export default OrderInput;