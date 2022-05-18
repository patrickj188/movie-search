import SearchMovies from "../../components/search/SearchMovies"
import SearchByGenres from "../../components/search/SearchByGenres"

export default function movies({ movies }) {
    return (
        <div>
            <h1>Movie Page</h1>
            <div>
                <div>
                    <SearchMovies />
                    <di>
                        <SearchByGenres />
                    </di>
                </div>

            </div>
        </div>
    )
}