import { useMemo, useState, useEffect, useContext } from 'react';
import styles from './Home.module.css';
import CarItem from './car-item/CarItem';
import {cars as carsData} from './cars.data';
import CreateCarForm from './create-car-form/CreateCarForm';
import { CarService } from '../../../services/car.service';
import { AuthContext } from '../../../providers/AuthProvider';


function Home() {
    const [cars, setCars] = useState(carsData);

    useEffect(() => {
        const fetchData = async () => {
          const data = await CarService.getAll()
    
          setCars(data.products);
        }
    
        fetchData();
    }, [])
    
    const {user, setUser} = useContext(AuthContext);

    return (
        <>
            <h1>
                Catalog 
            </h1>
            {user ? (
                <>
                    <h2>Welcome, {user.name}!</h2> 
                    <button onClick={() => setUser(null)}>LogOut</button>
                </>  
            ) : <button onClick={() => setUser({name:'max'})}>login</button>
            }

            
            <CreateCarForm setCars={setCars} />
            <div>
                {cars.map(car => (
                    <CarItem key={car.id} car={car} />
                ))}
            </div>
        </>
    )
}

export default Home;