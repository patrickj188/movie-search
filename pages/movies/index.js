import SearchMovies from "../../components/SearchMovies"

export default function movies({movies}){
    return (
        <div>
            <h1>Movie Page</h1>
            <div>
            <SearchMovies />
            </div>
        </div>
    )
}