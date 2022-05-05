import style from './MovieCard.module.css'

const MovieCard = ({ title, img, actors}) =>{
return (
    <div className={style.card}>
    <div className={style.container}>
    <img className={style.cardImg} src={img} alt="Avatar" />
      <h4><b>{title}</b></h4>
      <p>{actors}</p>
    </div>
  </div>
)
}

export default MovieCard;