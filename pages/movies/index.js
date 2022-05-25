import SearchMovies from "../../components/search/SearchMovies"
import styles from './index.module.css'


export default function movies({ movies }) {
    return (
        <div className={styles.main}>
            <h1>Movie Page</h1>
            <div>
                <div>
                    <SearchMovies />
                </div>

            </div>
        </div>
    )
}