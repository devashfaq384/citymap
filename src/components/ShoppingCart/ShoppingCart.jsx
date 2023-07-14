import React, { useState } from 'react'
import {FaLock , FaMinus , FaPlus , FaRecycle ,FaTag , FaShippingFast} from 'react-icons/fa'
import {AiFillLike} from "react-icons/ai"
import { MdDelete } from 'react-icons/md'
import { GiLifeSupport } from 'react-icons/gi'
import blue from '../../images/greenary.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
  const { title, subTitle } = useSelector((state) => state.textState);
  const value = useSelector((state)=> state.addToCart )


  const val = value.Price
  const originalPrice = val.replace(/\D/g, "")
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(originalPrice);
  const [item, setItem] = useState(' ')

  const increment = () => {
    setQuantity(quantity + 1);
    setPrice(originalPrice * (quantity + 1));
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(originalPrice * (quantity - 1));
    }
  };

  return (
    <div>
        <div className='text-center text-[40px]' >
          Your Cart
        </div>
        {/* headings  */}
        <div className='w-[75%] mx-auto py-10 flex justify-between border-b-2 border-solid broder-gray-100' >
          <div className='transition-all duration-500 text-white rounded px-5 bg-gray-400 hover:bg-gray-300 flex items-center' >
          <FaLock></FaLock>
            <button className=' px-2 py-3' >  CHECK OUT </button>
          </div>
          <div className='hidden md:block'>
            <div className='pt-4' >Quantity</div>
          </div>
          <div className='hidden md:block'>
            <div className='pt-3' >Total</div>
          </div>
        </div>

        <div className={` ${item == "!hidden" ? "block" : "hidden"} mx-auto my-10 w-fit transition-all duration-500 text-white rounded px-5 bg-gray-400 hover:bg-gray-300 flex items-center`} >
            <Link to='/' >
              <button className=' px-2 py-3' > Cart is empty , Design your map  </button>
            </Link>
          </div>


        {/* cart items will be here  */}
        <div className={` ${item} grid grid-cols-12 w-[75%] h-[30dvh] mx-auto border-b-2 border-solid broder-gray-100`} >
          {/* map here  */}
          <div className='col-span-12 md:col-span-6 flex justify-center items-center' >
            <div className='mr-7'>
              <img src={blue} className='w-[80px] h-[110px] ' alt="Map here" />
            </div>
            <div className=' leading-6 px-3' >
              <div>Customizable City Print</div>
              <div>{value.Size} </div>
              <div>{title}</div>
              <div>{subTitle}</div>
              <div onClick={()=>{setItem('!hidden')}} className='flex items-center transition-all duration-500 hover:text-gray-600 hover:cursor-pointer w-fit' > <MdDelete></MdDelete> Remove</div>
            </div>
          </div>
          {/* buttons */}
          <div className='col-span-6 md:col-span-2 flex items-center' >
            <button onClick={()=>{decrement()}} className={` ${quantity <= 1 ? 'hidden' : 'block'} transition-all h-fit duration-500 text-white rounded px-3 py-2 bg-gray-400 hover:cursor-pointer hover:bg-gray-300 flex items-center`}>
              <FaMinus></FaMinus>
            </button>
            <div className='px-4' >{quantity}</div>
            <button onClick={()=>{increment()}} className='transition-all h-fit duration-500 text-white rounded px-3 py-2 bg-gray-400 hover:cursor-pointer hover:bg-gray-300 flex items-center' >
              <FaPlus></FaPlus>
            </button>
          </div>
          {/* Price will be here */}
          <div className='col-span-6 md:col-span-4 text-xl flex items-center justify-end' >
            ${price}
          </div>
        </div>


        <div className={` ${item} flex flex-col mx-auto items-center md:items-end w-[75%] my-10`} >
          <div className='w-full md:w-[35%]' >
              <div className='flex' >
                <div className='mr-auto' >Subtotal</div>
                <div className='ml-auto' >${price}</div>
              </div>
              <div className='text-sm text-red-400 flex items-center justify-center' ><FaTag></FaTag> You are saving $1.00</div>
              <div className='text-center text-gray-500 my-2 text-sm' >Tax included. Shipping calculated at checkout.</div>
              <div className='bg-gray-400 w-full py-2 my-2 hover:bg-gray-500 rounded' >
                <Link to="/" >
                  <div className='flex items-center justify-center' >Update Cart <FaRecycle className='ml-2' ></FaRecycle></div>
                </Link>
              </div>
              <div className='bg-gray-600 w-full text-white py-2 my-2 hover:bg-gray-500 rounded' >
                <div className='flex items-center justify-center' ><FaLock className='mr-2' ></FaLock> CHECKOUT </div>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-12 justify-center' >
            <div className='col-span-2 hidden md:block ' ></div>
            <div className=' col-span-12 mx-auto my-4 md:col-span-3 flex' >
              <div className='text-[40px]' ><AiFillLike></AiFillLike></div>
              <div className='mx-4' >
                <div className='text-[20px]' >High Quality</div>
                <div className='text-gray-700 '>We work with the best printing companies across the world</div>
              </div>
            </div>
            <div className='col-span-12  mx-auto my-4 md:col-span-3 flex' >
              <div className='text-[40px]' ><FaShippingFast></FaShippingFast></div>
              <div className='mx-4' >
                <div className='text-[20px]' >For WORLDWIDE Shipping</div>
                <div className='text-gray-700'>Delivered in 2-6 business days</div>
              </div>
            </div>
            <div className='col-span-12 mx-auto my-4 md:col-span-3 flex' >
              <div className='text-[40px]' ><GiLifeSupport></GiLifeSupport></div>
              <div className='mx-4' >
                <div className='text-[20px]' >Outstanding Support</div>
                <div className='text-gray-700'>We reply within 1 business day</div>
              </div>
            </div>
          </div>

    </div>
  )
}

export default ShoppingCart