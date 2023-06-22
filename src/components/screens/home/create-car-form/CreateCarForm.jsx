import { useEffect, useState } from 'react'
import styles from './CreateCarForm.module.css'
import { CarService } from '../../../../services/car.service'
import { useForm } from 'react-hook-form'


const clearData = {
  price: '',
  brand: '',
  thumbnail: '',
}

const CreateCarForm = ({setCars}) => {
  const [data, setData] = useState(clearData)

  const {register, reset, handleSubmit} = useForm({
    mode: 'onChange'
  })

  const createCar = data => {
    e.preventDefault();
    console.log(data);
    setCars(prev => [ {id: prev.length + 1, ...data}, ...prev])

    setData(clearData);
  }
  

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>

        <input
          type="text " 
          placeholder="Name" 
          onChange={e => setData(prev => ({
            ...prev, brand: e.target.value
          }))} 
          value={data.brand}
        />
        <input type="text " placeholder="Price"
          onChange={e => setData(prev => ({
            ...prev, price: e.target.value
          }))} 
          value={data.price}
         />
        <input type="text " placeholder="Image" 
          onChange={e => setData(prev => ({
            ...prev, thumbnail: e.target.value
          }))} 
          value={data.thumbnail}
        />

        <button className='btn' onClick={e => createCar(e)}>Create</button>
    </form>
  )
}

export default CreateCarForm 