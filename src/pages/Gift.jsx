import OurProduct from "../components/Ourproduct";
import {products } from "../Data/Data";

const Gift = () => {
  return (
    <div className="p-8 pt-15">
      <h1 className="text-3xl font-semibold text-center mb-2">
        {"Our Gift Products"}
      </h1>
      <OurProduct products={products} />
    </div>
  );
};

export default Gift;
