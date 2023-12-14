import Image from "next/image";

import sampleImage from "@/public/assets/images/sample-image.jpg";

import styles from "./styles.module.scss";

interface IProps {
  title: string;
  price: string;
}

const ProductCard = ({ title, price }: IProps) => {
  return (
    <div className={styles["card-wrapper"]}>
      <Image src={sampleImage} alt="house-image" width={300} height={300} />
      <h2>{title}</h2>
      <div className={styles["details-wrapper"]}>
        <span>2 bed</span>
        <span>3 bath</span>
        <span>Att/Row/Twnhouse</span>
        <span>2 parking</span>
      </div>
      <p className={styles.price}>${price}</p>
    </div>
  );
};

export default ProductCard;
