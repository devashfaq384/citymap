import React, { useState } from 'react'
import NextStep from '../NextStep/NextStep'
import { useDispatch } from 'react-redux';
import { cartValue } from '../../store/slices/addToCartSlice';

const Material = () => {
  const dispatch = useDispatch()
  const [price, setPrice] = useState(35);

  const handleChange = (event) => {
    setPrice(event.target.value * 35);
    if(event.target.value === 0.65){
      dispatch(cartValue({
        Material: 'BASIC'
      }))
    }else{
      dispatch(cartValue({
        Material: 'PRO'
      }))
    }



  }

  return (
    <div className='mx-auto' >
        <div className=' text-[25px] md:text-[30px] text-white mb-5' >Kies akoestische waarde</div>
        <select onChange={handleChange} name="acoustic" id="acoustic" className='ring-0 w-full outline-none rounded-xl py-1 bg-white text-gray-600'  >
            <option value={1} selected> Kies een optie</option>
            <option value={0.65}>BASIC {`(AW 0.65)`}</option>
            <option value={0.90} >PRO {`(AW 0.90)`}</option>
        </select>
        <div className='font-bold text-white pt-6' >
          Price :  ${price}
        </div>
        <NextStep></NextStep>
    </div>
  )
}

export default Material