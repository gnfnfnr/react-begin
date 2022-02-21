import navList from "../atom/navList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import styles from './Nav.module.css';
import { Link } from "react-router-dom";

function Nav() {
    return(
    <nav className={styles.nav}>
        <ul className={styles.nav__container}>
            <li className={styles.nav__list}>
                <Link to={`${process.env.PUBLIC_URL}/`}>
                    <FontAwesomeIcon icon={faWikipediaW} size='2x' style={{color:"#ff0558"}}/>
                    <strong style={{color:"rgb(41, 42, 50)"}}>pedia</strong>
                </Link>
            </li>
            {navList.map(li => 
                <li key={li.id} className={styles.nav__list}>{li.title}</li>
            )}
        </ul>
      </nav>
    )
}

export default Nav