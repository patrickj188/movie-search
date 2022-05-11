import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PopularMovies from '../components/popularMovies/PopularMovies'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Watch Pile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <PopularMovies />
    

      </main>
    </div>
      

  )
}
