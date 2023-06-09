import React, { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import NextStep from '../NextStep/NextStep'
import { StylesList } from './StylesList'
import { useDispatch, useSelector } from 'react-redux'
import { changeStyle } from '../../store/slices/styleSlice'
import { changeSize } from '../../store/slices/Size'
import { cartValue } from '../../store/slices/addToCartSlice'

const Styles = () => {
    const dispatch = useDispatch()
    const dir = useSelector((state)=>state.sizeState)
    const addToCartValue = useSelector((state)=> state.cartValueState )
    const [selectedStyle, setSelectedStyle] = useState(null);

    const horizontal =()=>{
        dispatch(changeSize(      
        {   ...dir,
            height : '240px',
            width : '380px',
            shape: 'rectangle-X'
        }         
     ))
    }
 return (
    <div className=' mx-auto sm:w-auto px-5 sm:p-auto ' >
        <div className='text-[28px] my-3 text-white text-center ' >
        Kies je favoriete stijl!
        </div>
    <div className='flex flex-wrap cursor-pointer justify-between sm:grid-cols-4 gap-3' >
        { StylesList.map((item , index )=>{
            return(
                <div key={index} onClick={()=>{
                    setSelectedStyle(item);
                    dispatch(changeStyle(item) )
                    dispatch(cartValue({
                        ...addToCartValue,
                        Style : item
                    }))
                }} className="relative w-16 h-16 rounded-2xl overflow-hidden">
                        <img src={item.image} alt="Red" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-500">
                            <div className="text-white">
                            <CheckIcon className="h-10 w-10 font-bold" />
                            </div>
                        </div>
                    {selectedStyle === item && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-50 hover:opacity-50 transition-opacity duration-500">
                            <div className="text-white">
                            <CheckIcon className="h-10 w-10 font-bold" />
                            </div>
                        </div>
                    )}
                </div>
            )
        }) }
    </div>

        <div className='my-3 flex'>
              <input type="checkbox" onChange={(e)=>horizontal(e)}  name="city" className=' cursor-pointer outline-none border-none ring-0' /> 
              <lable htmlFor='city' className='pl-3 text-sm cursor-pointer text-white ' >
                    Horizontaal
             </lable> 
        </div>

        <NextStep></NextStep>
    </div>

  )
}

export default Styles