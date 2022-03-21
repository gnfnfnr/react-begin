import { useParams } from "react-router-dom";
import {useEffect } from "react";
import Slide from "../components/Slide";
import styles from "./Home.module.css";

function Part() {
    const {detail} = useParams();
    const sort = ["title", "year", "rating", "download_count"];
    return (
        <div className={styles.slide__container}>
            <div className={styles.slide__box}>
                {sort.map(list => 
                <div  key={list}>
                    <h3 className={styles.slide__title}>{list}</h3>
                    <Slide api={`https://yts.mx/api/v2/list_movies.json?${detail}&sort_by=${list}`}/>
                </div>
                )}
            </div>
        </div>
    )

}

export default Part;