import { FC } from "react";
import { Fact } from "../../types";
import styles from "./styles.module.css";
type Props = {
  data: Fact;
  index: number
};
export const FactCard: FC<Props> = ({ data, index }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{index}. {data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};
 