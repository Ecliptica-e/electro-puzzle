import styles from './Catalog.module.scss';
import Card from './Cards.json';
import { useState } from 'react';

export function Catalog() {

  const [items,setItems] = useState(Card)
  console.log(Card);

  const filterItems = (catItem) => {
    const updateItems = Card.filter((curItem) => {
      return curItem.category === catItem
    });
    setItems(updateItems);
  }

  const filterSeries = (catItem) => {
    const updateSeries = Card.filter((curItem) => {
      return curItem.series === catItem
    });
      setItems(updateSeries);
  }

  const categoryCount = (catItem) => {
    const updateCount = Card.filter((curItem) => {
      return curItem.category === catItem
    });
    return updateCount.length;
  }

  const seriesCount = (catItem) => {
    const updateCount = Card.filter((curItem) => {
      return curItem.series === catItem
    });
    return updateCount.length;
  }


  

  return <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.filters}>
        <h3>Фильтр</h3>
        <p>Категории</p>
        <button type="button" className={styles.btn} onClick={() => setItems(Card)}>Все
          <span>{Card.length}</span>
        </button>
        <button type="button" className={styles.btn} onClick={() => filterItems("overdrive")} >Овердрайвы 
          <span>{categoryCount("overdrive")}</span>
        </button>
        <button type="button" className={styles.btn} onClick={() => filterItems("distortion")}>Дисторшены
          <span>{categoryCount("distortion")}</span>
        </button>
        <button type="button" className={styles.btn} onClick={() => filterItems("fuse")}>Фузы
          <span>{categoryCount("fuse")}</span>
        </button>
        <button type="button" className={styles.btn} onClick={() => filterItems("compressor")}>Компрессоры
          <span>{categoryCount("compressor")}</span>
        </button>
        <button type="button" className={styles.btn} onClick={() => filterItems("modulation")}>Модуляция и Дилеи
          <span>{categoryCount("modulation")}</span> 
        </button>
        <button type="button" className={styles.btn} onClick={() => filterItems("filtration")}>Фильтрация и EQ
          <span>{categoryCount("filtration")}</span>
        </button>
        <button type="button" className={styles.btn} onClick={() => filterItems("boosters")}>Бустеры
          <span>{categoryCount("boosters")}</span>
        </button>
        <p>Серия</p>
        <button type="button" className={styles.btn} onClick={() => filterSeries("black")}>Black series
          <span>{seriesCount("black")}</span>
        </button>
        <button type="button" className={styles.btn} onClick={() => filterSeries("gold")}>Gold series
          <span>{seriesCount("gold")}</span>
        </button>
      </div>

        <div className={styles.none}>
        <div className={styles.reset}>
          <p>Ничего не найдено, сбросить фильтры?</p>
          <button type="button" onClick={() => setItems(Card)}>Сбросить</button>
        </div>
        </div>


      <div className={styles.grid}>
        {items.map((val) => (
          <>
            <div className={styles.wrap}>
              <a href="#!"></a>
              <img src={val.img} alt="{val.title}" />
              <h3>{val.title}</h3>
              <p className={styles.subtitle}>{val.subtitle}</p>
              <p className={styles.price}>{val.price}</p>
              <p className={styles.availability}>{val.availability}</p>
              <p className={styles.unavailability}>{val.unavailability}</p>
            </div>
          </>
        ))}
      </div>
    </div>

  </div>
}