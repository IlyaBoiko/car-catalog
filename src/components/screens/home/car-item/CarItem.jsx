import { Link } from 'react-router-dom';
import styles from '../Home.module.css';


function CarItem({car}) {
    return (
        <div key={car.id} className={styles.item} >
            <div className={styles.image} style={{
                backgroundImage: `url(${car.thumbnail})`,
            }} />
            <div className={styles.info}>
                <h2>{car.brand}</h2>
                <p>{car.price}$100</p>
                <Link className='btn' to={`/car/${car.id}`}>Read more</Link>
            </div>
        </div>
    )
}
export default CarItem; 