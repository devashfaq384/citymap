import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid' 
import { moveTo } from '../../store/slices/menuSlice'
import { useDispatch, useSelector } from 'react-redux'


const NextStep = () => {
  const initialVal = useSelector((state)=> state.menuState )
  console.log(initialVal , 'menu log')
  const dispatch = useDispatch()
  const next = (name)=>{
    dispatch(moveTo(name))
  }

  let data =['Locatie' ,'Stijl' ,'Text','Vorm','Materiaal','Formaat']
  return (
    <div className='text-white' >
        <button onClick={()=>{
          for (let i = 0; i < data.length; i++) {
            if(data[i] === initialVal.menuName ){
              next(data[i+1])
            }
          }
        }}  className='flex justify-center text-sm h-10 mt-[10%] items-center bg-[rgb(254,0,140)]  rounded-full w-full'>
            Volgende
            <ArrowRightIcon className='h-4 pl-3'></ArrowRightIcon>
        </button>
    </div>
  )
}

export default NextStep
