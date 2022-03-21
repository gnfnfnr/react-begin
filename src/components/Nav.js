import navList from "../atom/navList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons';
import styles from './Nav.module.css';
import { Link, useParams } from "react-router-dom";
import {useState } from "react";

function Nav() {
    const [change, setChange] = useState(false);
    const onClick = () => {
        setChange(true)
        console.log(change)
    };
    return(
    <nav className={styles.nav}>
        <ul className={styles.nav__container}>
            <Link to={`${process.env.PUBLIC_URL}/`}>
                <li className={styles.nav__list} key="20220">
                    <FontAwesomeIcon icon={faWikipediaW} size='2x' style={{color:"#ff0558"}}/>
                    <strong style={{color:"rgb(41, 42, 50)"}}>pedia</strong>
                </li>   
            </Link>
            {navList.map(li =>
                <li key={li.id} className={change? styles.nav__list__active :styles.nav__list}>
                    <a href={`/page/${li.path}`}  onClick={onClick}>
                        {li.title}
                    </a>
                </li>
            )}
        </ul>
      </nav>
    )
}

export default Nav