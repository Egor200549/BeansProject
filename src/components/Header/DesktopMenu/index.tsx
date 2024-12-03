import { Link } from "react-router-dom";
import styles from './styles.module.css';

export const DesktopMenu = () => {
  return (
    <nav>
      <Link className={styles.link} to="/BeansProject/beans">Beans</Link>
      <Link className={styles.link} to="/BeansProject/facts">Facts</Link>
      <Link className={styles.link} to="/BeansProject/recipes">Recipes</Link>
      <Link className={styles.link} to="/BeansProject/combinations">Combinations</Link>
      <Link className={styles.link} to="/BeansProject/history">History</Link>
    </nav>
  );
};
