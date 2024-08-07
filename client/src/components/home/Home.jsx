import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.styledH}>
                <h1>the middle of everything</h1>
                <Link to={`/catalog`}><h2>Discover Illinois</h2></Link>
                
            </div>
            <img src="/images/toni-pomar-O2CDOAopMzA-unsplash.jpg" alt="" />

        </div>
    )
}