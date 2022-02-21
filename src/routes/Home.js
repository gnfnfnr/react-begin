import Slide from "../components/Slide";
import navList from "../atom/navList";
import styles from "./Home.module.css";
function App() {
  return(
    <div className={styles.slide__container}>
      <section>
      {navList.map(list => {
        return(
          <div className={styles.slide__box} key={list.id}>
            <h3 className={styles.slide__title}>{list.title}</h3>
            <Slide api={`https://yts.mx/api/v2/list_movies.json?${list.path}`}/>
          </div>
        )
      }
  
      )}
      </section>
    </div>
  )
}

export default App;
