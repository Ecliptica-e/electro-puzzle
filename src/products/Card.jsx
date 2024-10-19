import styles from './Card.module.scss';
import "./Cards.json";

export function Card() {
  return <div className={styles.wrapper}>
    <div className={styles.container}>
        <img src="{img}" alt="" />
        <h2>{title}</h2>

    </div>
  </div>
}