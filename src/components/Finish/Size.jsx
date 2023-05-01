import { CheckIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSize } from '../../store/slices/Size' 

const Size = () => {
    const dispatch = useDispatch()
    const  direction  = useSelector((state)=>state.sizeState)
    console.log(direction)
    const dimension = [
        {
            size : "Small 11 x 17",
            price : "$35",
            height : direction.shape=== "rectangle-Y" ? `${parseInt(direction.height, 10) - 20}px` : direction.height,
            width: direction.shape=== "rectangle-X" ? `${parseInt(direction.width, 10) - 20}px` : direction.width
        },
        {
            size : "Medium 18 x 24",
            price : "$45",
            height : direction.shape=== "rectangle-Y" ? `${parseInt(direction.height, 10) + 40}px` : direction.height,
            width: direction.shape=== "rectangle-X" ? `${parseInt(direction.width, 10) + 40}px` : direction.width
        },
        {
            size : "Large 24 x 36",
            price : "$59",
            height : direction.shape=== "rectangle-Y" ? `${parseInt(direction.height, 10) + 60}px` : direction.height,
            width: direction.shape=== "rectangle-X" ? `${parseInt(direction.width, 10) + 60}px` : direction.width
        },
    ]

  return (
    <div className=' flex flex-col mx-auto w-10/12 ' > 
        <div className='text-[30px] text-white text-center' >
            Kies je maat
        </div>
        {/* Metric units */}
        
        <div className='text-white text-[20px] my-3 pl-2 ' >Maat</div>
        <div className='flex flex-col grid-cols-12 w-full ' >
            {
                dimension.map((item)=>{
                    return(
                        <button onClick={()=>{
                             dispatch(changeSize(
                                {
                                    height :  item.height ,
                                    width :  item.width ,
                                    direction : direction.direction,
                                    shape : direction.shape
                                }                            
                            ))
                        }} className=' flex justify-between items-center px-4 text-green-700 my-2 hover:text-white bg-white hover:bg-red-600 rounded-full h-9 w-full ' >
                            <span className='hover:underline' >
                                {item.size} CM
                            </span> 
                            <span>
                                {item.price}
                            </span>
                        </button>
                    )
                })
            }

            <button className='flex justify-center text-sm h-10 mt-[10%] items-center bg-[rgb(59,99,110)] text-white rounded-full w-full'>
                <CheckIcon className='h-5 font-bold pl-3'></CheckIcon>
                Order my map
            </button>
        </div>
    </div>
  )
}

export default Size