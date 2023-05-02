import React from 'react'
import { FiCircle , FiHexagon , FiSquare } from 'react-icons/fi'
import { TbRectangle , TbRectangleVertical } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { changeSize } from '../../store/slices/Size'
import NextStep from '../NextStep/NextStep'
import { cartValue } from '../../store/slices/addToCartSlice'
import { hexagonData, rectangle_X, rectangle_Y, roundData, squareData } from './SizeData'

const Shapes = () => {

    const dispatch = useDispatch()
    const  direction  = useSelector((state)=>state.sizeState)

    // dispatch for square shape 
    const square = ()=>{
        
        
        dispatch(changeSize({
        ...direction,
            height:'350px',
            width:'350px',
            shape:'square',
            sizes:squareData
        }))

        dispatch(cartValue({
            Shape : 'Vierkant'
        }))
    }
    // hexagone shape is here
    const hexagone = ()=>{
        
        
        dispatch(changeSize({
        ...direction,
            height:'300px',
            width:'300px',
            shape:'hexagon',
            class:"hexagon",
            sizes: hexagonData
        }))

        dispatch(cartValue({
            Shape : 'Vierkant'
        }))
    }
    // dispatch for Rectangle Horizontal shape 
    const rectangleX = ()=>{
        dispatch(changeSize({
        ...direction,
            height:'240px',
            width:'380px',
            shape:'rectangle-X',
            sizes: rectangle_X
        }))
        dispatch(cartValue({
            Shape : 'Rechthoek horizontaal'
        }))
        
    }
    // dispatch for Rectangle vertical shape 
    const rectangleY = ()=>{
        dispatch(changeSize({
        ...direction,
            height:'380px',
            width:'240px',
            shape:'rectangle-Y',
            sizes: rectangle_Y
        }))
        dispatch(cartValue({
            Shape : 'Rechthoek verticaal'
        }))
    }
    // dispatch for circle shape 
    const circle = ()=>{
        dispatch(changeSize({
        ...direction,
            height:'250px',
            width:'250px',
            shape:'circle',
            class : 'rounded-full',
            sizes: roundData
        }))
        dispatch(cartValue({
            Shape : 'Rond'
        }))
    }


  return (
    <div className=' mx-auto sm:w-auto overflow-y-hidden' >
        <div className='text-white text-center text-[30px] mb-5'>Kies favoriete vorm</div>
    <div className='mx-auto sm:w-auto text-center gap-5 flex sm:flex-col overflow-y-hidden '>
        <button onClick={hexagone} className='bg-red-200 md:w-full rounded   py-4 h-fit px-4 flex' >
            <FiHexagon className='h-6 w-6' ></FiHexagon>
            <span className='pl-2' >
                Hexagon
            </span>
        </button>
        <button onClick={square} className='bg-red-200 md:w-full rounded   py-4 h-fit px-4 flex' >
            <FiSquare className='h-6 w-6' ></FiSquare>
            <span className='pl-2' >
            Vierkant
            </span>
        </button>
        <button onClick={circle} className='bg-red-200 md:w-full rounded   py-4 h-fit px-4 flex' >
            <FiCircle className='h-6 w-6' ></FiCircle>
            <span className='pl-2' >
                Rond
            </span>
        </button>
        <button onClick={rectangleY} className='bg-red-200 md:w-full rounded   py-4 h-fit px-4 flex' >
            <TbRectangleVertical className='h-6 w-6' ></TbRectangleVertical>
            <span className='pl-2' >
            Rechthoek verticaal
            </span>
        </button>
        <button onClick={rectangleX} className='bg-red-200 md:w-full rounded py-4 h-fit px-4 flex' >
            <TbRectangle className='h-6 w-6' ></TbRectangle>
            <span className='pl-2' >
            Rechthoek horizontaal
            </span>
        </button>
        </div>
        <NextStep></NextStep>
    </div>
  )
}

export default Shapes