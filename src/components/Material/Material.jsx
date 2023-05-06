import React, { useState } from 'react'
import NextStep from '../NextStep/NextStep'
import { useDispatch, useSelector } from 'react-redux';
import { cartValue } from '../../store/slices/addToCartSlice';
import { changeSize } from '../../store/slices/Size';


const Material = () => {
  const dispatch = useDispatch()
  const dimension = useSelector((state) => state.sizeState)
  const addToCartValue = useSelector((state)=> state.cartValueState )

  const [price, setPrice] = useState(dimension.sizes[0].priceBasic)

  const handleChange = (event) => {
    dispatch(changeSize({
      ...dimension,
      material: event.target.value
    }))

    if(event.target.value === 'basic'){
      setPrice(price)
    }else{
      setPrice(dimension.sizes[0].pricePro)
    }
      dispatch(cartValue({
        ...addToCartValue,
        Material: event.target.value
      }))
    
  }

  return (
    <div className='mx-auto'>
      <div className='text-[25px] md:text-[30px] text-white mb-5'>Kies akoestische waarde</div>
      <select
        onChange={handleChange}
        name="acoustic"
        id="acoustic"
        className='ring-0 w-full outline-none rounded-xl py-1 bg-white text-gray-600'
      >
        <option value="basic" selected> Kies een optie</option>
        <option value="basic">BASIC {`(AW 0.65)`}</option>
        {
          dimension.sizes[0].pricePro === '0' ? null : <option value='pro'>PRO {`(AW 0.90)`}</option>
         }
      </select>
      <div className='font-bold text-white pt-6'>
        {/* Prijs: {dimension.material === 'basic' || undefined || '0' ? dimension.sizes[0].priceBasic : dimension.sizes[0].pricePro} */}
        Prijs: {price}
      </div>
      <NextStep></NextStep>
    </div>
  )
}
  export default Material
