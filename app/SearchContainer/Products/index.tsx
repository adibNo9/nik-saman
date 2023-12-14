import { IProduct } from "../";
import ProductCard from "../ProductCard";
import styles from "./styles.module.scss";

const Products = ({ data }: { data?: IProduct[] }) => {
  return (
    <div className={styles["products-wrapper"]}>
      {data &&
        data?.map((item) => (
          <ProductCard key={item.id} title={item.title} price={item.price} />
        ))}
    </div>
  );
};

export default Products;
