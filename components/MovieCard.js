import style from './MovieCard.module.css'

const MovieCard = ({ title, img, year, id}) =>{
return (
    <div className={style.card}>
    <div className={style.container}>
    <img className={style.cardImg} src={img} alt={id} />
      <h4><b>{title}</b></h4>
      <p>{year}</p>
    </div>
  </div>
)
}

export default MovieCard;