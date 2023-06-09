import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NextStep from '../NextStep/NextStep'
import { changeSubTitle , changeTitle } from '../../store/slices/Text'
import { cartValue } from '../../store/slices/addToCartSlice'

const Text = () => {
  const dispatch = useDispatch()
  const addToCartValue = useSelector((state)=> state.cartValueState )

  
  const [isChecked, setIsChecked] = useState(false);
  const [allIsChecked, setAllIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    dispatch(changeSubTitle({
      subTitle : "N°34°56′12″ S°78°34′90″"
    }))
  };
  const handleAllCheckboxChange = (event) => {
    setAllIsChecked(event.target.checked);
    dispatch(changeTitle({
      title : ""
    }))
    dispatch(changeSubTitle({
      subTitle : ""
      }))
      dispatch(cartValue({
        ...addToCartValue,
        TextValue:{
          display : "none"
        }
      }))
  };

  // this function dispatch the title
  const getTitle = (event)=>{
    const value = event.target.value
    dispatch(changeTitle({
      title : value
    }))
    dispatch(cartValue({
      ...addToCartValue,
      TextValue:{
        title : value
      }
    }))
    
  }
  //this funcitons dispatch the subtitle
  const getSubTitle = (event)=>{
    const value = event.target.value
    dispatch(changeSubTitle({
      subTitle : value
    }))
    dispatch(cartValue({
      ...addToCartValue,
      TextValue:{
        Subtitle : value
      }
    }))
  }

  return (
    <div className='w-10/12 mx-auto' >
      <div className='text-white text-[35px] text-center '>
        Pas de text aan
      </div>
      <form className='flex  flex-col' >
        <div className='flex flex-col'>
          <label className=' my-2 font-bold text-sm text-white' >Titel</label>
          <input type="text" Value="Amsterdam" name="Title" onChange={(e)=>getTitle(e)} disabled={allIsChecked} className={`h-8 pl-3 ring-0 outline-none  ${ allIsChecked ? 'bg-gray-300 text-gray-500' : 'bg-white'} `} />
        </div>
        <div className='flex flex-col'>
          <label className=' my-2 text-sm font-bold text-white' >Ondertitel</label>
          <input type="text" Value="N°34°56′12″ S°78°34′90″" name="Subtitle" onChange={(e)=>getSubTitle(e)} disabled={isChecked || allIsChecked }    className={`h-8 pl-3 ring-0 outline-none  ${isChecked || allIsChecked ? 'bg-gray-300 text-gray-500' : 'bg-white'} ` } />
        </div>
        <div className='mb-1 mt-2 flex'>
          <input type="checkbox" name="city" checked={isChecked} onChange={handleCheckboxChange} className=' cursor-pointer outline-none border-none ring-0' /> 
          <lable htmlFor='city' className='pl-3 text-sm cursor-pointer text-white' >
          Gebruik coördinaten als ondertitel
          </lable> 
        </div>
        <div className='my-1 flex'>
          <input type="checkbox" name="city" checked={allIsChecked} onChange={handleAllCheckboxChange}  className='  cursor-pointer outline-none border-none ring-0' /> 
          <lable htmlFor='city' className='pl-3 text-sm cursor-pointer text-white' >
          Verberg text
          </lable> 
        </div>
      </form>
      <NextStep></NextStep>
    </div>
  )
}

export default Text