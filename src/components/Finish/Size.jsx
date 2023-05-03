import { CheckIcon } from '@heroicons/react/24/solid'
import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSize } from '../../store/slices/Size' 
import { hexagonData, rectangle_X, rectangle_Y, roundData, squareData } from '../Shapes/SizeData'
import { cartValue } from '../../store/slices/addToCartSlice'
// import { sizes } from '../Shapes/SizeData'

const Size = () => {
    const dispatch = useDispatch()
    const addToCartValue = useSelector((state)=> state.cartValueState )

    const  direction  = useSelector((state)=>state.sizeState)
    const [data, setData] = useState(rectangle_Y)
    
    useEffect(() => {
        if(direction.shape === "hexagon"){
            setData(hexagonData)
        }else if(direction.shape === 'square'){
            setData(squareData)
        }else if(direction.shape === 'rectangle-X'){
            setData(rectangle_X)
        }else if(direction.shape === 'rectangel-Y'){
            setData(rectangle_Y)
        }else{
            setData(roundData)
        }
    }, [direction])
    
  return (
    <div className=' flex flex-col mx-auto w-10/12 ' > 
        <div className='text-[30px] text-white text-center' >
            Kies je maat
        </div>
        {/* Metric units */}
        
        <div className='text-white text-[20px] my-3 pl-2 ' >Maat</div>
        <div className='flex flex-col grid-cols-12 w-full ' >
            {
                direction.sizes?.map((item)=>{
                    return(
                        <button onClick={()=>{
                            dispatch(changeSize(
                                {   ...direction,
                                    height :  direction.shape=== "rectangle-Y" || "hexagon" || "circle" || 'square' ? +direction.height.slice(0, -2) + 40 + "px" : direction.height,
                                    width :  direction.shape=== "rectangle-X" || "hexagon" || "circle" || 'square' ? +direction.width.slice(0, -2) + 40 + "px" : direction.width,
                                    shape : direction.shape,
                                    sizes: data
                                }                            
                            ))
                            dispatch(cartValue({
                                ...addToCartValue,
                                Size: item
                            }))
                        }} className=' flex justify-between items-center px-4 text-green-700 my-2 hover:text-white bg-white hover:bg-red-600 rounded-full h-9 w-full ' >
                            <span className='hover:underline' >
                                 {item.name} {item.measures}
                            </span> 
                            <span>
                                { direction.material === 'basic' || undefined ? item.priceBasic : item.pricePro}
                            </span>
                        </button>
                    )
                })
            }

            <button className='flex justify-center text-sm h-10 mt-[10%] items-center bg-[rgb(59,99,110)] text-white rounded-full w-full'>
                <CheckIcon className='h-5 font-bold pl-3'></CheckIcon>
                Afronden 
            </button>
        </div>
    </div>
  )
}

export default Size