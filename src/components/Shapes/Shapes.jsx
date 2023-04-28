import React from 'react'
import { FiCircle , FiHexagon , FiSquare } from 'react-icons/fi'
import { TbRectangle , TbRectangleVertical } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { changeSize } from '../../store/slices/Size'
import NextStep from '../NextStep/NextStep'
import { cartValue } from '../../store/slices/addToCartSlice'

const Shapes = () => {

    const dispatch = useDispatch()
    // dispatch for square shape 
    const square = ()=>{
        
        
        dispatch(changeSize({
            height:'350px',
            width:'350px'
        }))


        dispatch(cartValue({
            Shape : 'Vierkant'
        }))
    }
    // dispatch for Rectangle Horizontal shape 
    const rectangleX = ()=>{
        dispatch(changeSize({
            height:'260px',
            width:'420px'
        }))
        dispatch(cartValue({
            Shape : 'Rechthoek horizontaal'
        }))
    }
    // dispatch for Rectangle vertical shape 
    const rectangleY = ()=>{
        dispatch(changeSize({
            height:'400px',
            width:'260px'
        }))
        dispatch(cartValue({
            Shape : 'Rechthoek verticaal'
        }))
    }
    // dispatch for circle shape 
    const circle = ()=>{
        dispatch(changeSize({
            height:'300px',
            width:'300px',
            class : 'rounded-full'
        }))
        dispatch(cartValue({
            Shape : 'Rond'
        }))
    }


  return (
    <div className=' mx-auto sm:w-auto overflow-y-hidden' >
        <div className='text-white text-center text-[30px] mb-5'>Choose favourite shape</div>
    <div className='mx-auto sm:w-auto text-center gap-5 flex sm:flex-col overflow-y-hidden '>
        <button className='bg-red-200 md:w-full rounded   py-4 h-fit px-4 flex' >
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