import React from "react";
import styles from "../../styles/Home.module.css";
interface IPropsComponent {
    url: string;
    title: string;
    // date: string;
    note: string;
}

//Component pagination
export default function MovieComponent({
    url,
    title,
    // date,
    note,
}: IPropsComponent) {
    return (
        <div >
            <div>
                <span>
                {note}
                </span>
            <img className={styles.movieImage}
                src={`http://image.tmdb.org/t/p/w500${url}`}
                alt="image movie"
                width={350}
                height={400}  
            />
            <h2>{title}</h2>
            
            </div>

        </div>

    );
}