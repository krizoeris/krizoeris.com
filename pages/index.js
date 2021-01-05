import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kriztian Eris Labatete | Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/kriztian.png" className={styles.image} />
        <h1 className={styles.title}>
          Hi! I'm Kriztian Eris Labatete
        </h1>

        <p className={styles.description}>
          Experienced with various web development technologies such as JavaScript Frameworks, PHP Frameworks, RESTful API’s, and Micro services. Knowledgeable on Cloud services & Agile/Scrum methodology
        </p>

        <div className={styles.subTitleContainer}>
          <h2>
            Open Source Projects that I've made
          </h2>
        </div>
          
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>ecommerce-app</h3>
            <p>⚛️ E-commerce Frontend</p>
            <div>
              <a className={styles.button} href="https://buzzz-ecommerce-app.herokuapp.com/" target="_blank">Website</a>
              <a className={styles.button} href="https://github.com/krizoeris/ecommerce-react" target="_blank">GitHub</a>
            </div>
          </div>

          <div href="https://nextjs.org/learn" className={styles.card}>
            <h3>covidph-map</h3>
            <p>🌎 Map tracker of COVID19 confirmed cases in the Philippines</p>
            <div>
              <a className={styles.button} href="https://covidph-map.netlify.app/" target="_blank">Website</a>
              <a className={styles.button} href="https://github.com/krizoeris/covidph-map" target="_blank">GitHub</a>
            </div>
          </div>

          <div className={styles.card}>
            <h3>Cryptowatch</h3>
            <p>📈 Displays the coins by market cap and the latest price change</p>
            <div>
              <a className={styles.button} href="https://krizoeris.github.io/Cryptowatch/" target="_blank">Website</a>
              <a className={styles.button} href="https://github.com/krizoeris/Cryptowatch" target="_blank">GitHub</a>
            </div>
          </div>

          <div className={styles.card}>
            <h3>kailearning-system</h3>
            <p>
              Web application that utilizes an online learning collaboration with students and teachers
            </p>
            <div>
              <a className={styles.button} href="http://kailearning.000webhostapp.com/login/index.php" target="_blank">Website</a>
              <a className={styles.button} href="https://github.com/krizoeris/kailearning-system" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </main>

      <div><a className={styles.button} href="https://github.com/krizoeris/" target="_blank">Load More on GitHub...</a></div>

      <footer className={styles.footer}>
        &copy; 2020 Kriztian Eris E. Labatete
      </footer>
    </div>
  )
}
