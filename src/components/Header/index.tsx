import React, { FormEvent } from "react";
import styles from "../../styles/Header.module.css";
import { RiMovieFill } from 'react-icons/ri';
interface IPropsComponent {
    url: string;
    title: string;
    // date: string;
    note: string;
}
 // Evento do form

//Component pagination
export default function HeaderComponent({

}) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <RiMovieFill size={70} color="red"/>
            <h1> Filmes da Semana</h1>
            </div>

            <div>
            <div className={styles.formSearch}>
          <form 
        //   onSubmit={handleSearchMovie}
          >
            <input
              type="text"
              placeholder="Procure por um filme..."
            //   onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Pesquisar</button>
          </form>
        </div>
        {/* <div className={styles.titleContainer}>
          {result ? (
            <h1>Exibindo resultados para: {`${result}`}</h1>
          ) : (
            <h1>Filmes da Semana</h1>
          )}
        </div> */}
            </div>

        </div>

    );
}