import React, { useState } from 'react'
import Shattered from '../../images/shattered.png'
import Logo from '../../images/mapLogo.png'
import CityMap from '../CityMap/CityMap'
import Rotate from '../../images/rotate.png'
import { changeSize } from '../../store/slices/Size'
import { useDispatch, useSelector } from 'react-redux'
import { TiPlus } from 'react-icons/ti'

const MapLayout = () => {
    const dimension = useSelector((state)=>state.sizeState)
    const dispatch = useDispatch()


  return (
    <div className=" h-[100vh] bg-center bg-cover bg-fixed" style={{ backgroundImage: `url(${Shattered})` }} > 
        <div className='w-full h-[10%] ' >
            <div className='w-32 pt-5 md:mx-auto' >
                <img src={Logo} alt="logo" />
            </div>
            <div className='flex gap-4 absolute top-0 right-0 mt-5' >
                <div className='bg-white rounded-md p-1 md:py-2 md:px-2 w-[1000%] ' >Shooping Cart</div>
                <div className='bg-white rounded-md p-1 md:py-2 md:px-2 ' >Help?</div>
            </div>
        </div>
        <div className=' h-[90%] flex flex-col justify-center items-center '>
            <div className='flex' >
                <TiPlus className='w-6 h-6 mt-[1px]' ></TiPlus> <div className='pb-10' >Wist je dat je kan slepen</div>
            </div>
                    <CityMap></CityMap>
            <div onClick={()=>{
                const newShape = dimension.shape === 'rectangle-X' ? 'rectangle-Y':'rectangle-X'
                dispatch(changeSize(   
                    {   ...dimension,
                        height : dimension.shape === 'rectangle-X' ? '380px' : '240px' ,
                        width : dimension.shape === 'rectangle-X' ? '240px' : '380px',
                        shape: newShape
                    }
                ))
            }} className='bg-white rounded-full p-3 absolute right-0 bottom-0 m-5 ' >
                <img src={Rotate} alt='rotate' className='w-16' />
            </div>
        </div>
    </div>
  )
}

export default MapLayout
