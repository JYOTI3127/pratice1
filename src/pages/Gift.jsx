import OurProduct from "../components/Ourproduct";
import { product } from "../Data/Data";

const Gift = () => {
  return (
    <div className="p-8">
      <OurProduct products={product} />
    </div>
  );
};

export default Gift;
