import styles from './Footer.module.scss';
import logo from '/logo.svg'


export function Footer() {
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.form}>
                <div>
                    <img src={logo} alt="" />
                    <span>ElectroPuzzle</span>    
                </div>
                <form>
                    <input type="email" placeholder='john@example.com' />
                    <button type='submit'></button>    
                </form>    
            </div>
            <div className={styles.links}>
                <h4>ПЕДАЛИ</h4>
                <a href="#!">Дилеи</a>
                <a href="#!">Бустеры</a>
                <a href="#!">Овердрайвы</a>
                <a href="#!">Дисторшены</a>
                <a href="#!">Модуляция</a>
                <a href="#!">Фузы</a>
                <a href="#!">Компрессоры</a>
            </div>    
            <div className={styles.links}>
                <h4>СТРАНИЦЫ</h4>
                <a href="#!">Главная</a>
                <a href="#!">Педали</a>
                <a href="#!">Контакты</a>
                <a href="#!">Новости</a>
            </div>
            <div className={styles.socials}>
                <h4>ПОДПИСЫВАЙСЯ</h4>
                <div>
                <a href="#!" className={styles.vk}></a>
                <a href="#!" className={styles.youtube}></a>
                <a href="#!" className={styles.dzen}></a>
                </div>
            </div>    
        </div>      
    </div>
  }