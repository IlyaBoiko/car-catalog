import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import CarItem from '../home/car-item/CarItem';
import {CarService} from '../../../services/car.service.js'

const CarDetail = () => {
    const  {id} = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
          const data = await CarService.getById(id);
    
          setCar(data);
        }
    
        fetchData();
      }, [id])
    

    return (
        <div>
            <Link to='/'>Back</Link>
            <CarItem car={car} />
        </div>
    )
}

export default CarDetail