import { FC } from "react";
import { Link } from "react-router-dom";
import { Bean } from "../../types";
import styles from "./styles.module.css";

type Props = {
  data: Bean;
};
export const BeanCard: FC<Props> = ({ data }) => {
  return (
    <Link
      to={`/BeansProject/bean/${data.beanId}`}
      className={styles.wrapper}
      style={{
        background: data.backgroundColor,
      }}
    >
      <div>
        <h3>{data.flavorName}</h3>
        <img className={styles.img} src={data.imageUrl} alt="imageOfBean" />
      </div>
      <p>{data.description}</p>
    </Link>
  );
};
