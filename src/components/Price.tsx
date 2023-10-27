import PurchaseList from "./PurchaseList";

export interface Props {
  price?: number;
}

const Price = () => {
  return <PurchaseList price={125} />;
};

export default Price;
