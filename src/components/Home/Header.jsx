import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

    return (
        <>
            <div className='w-full flex justify-end'>
                <button onClick={()=> navigate('/addLink')} className='w-[197.16px] h-[46px] bg-button-default hover:bg-button-hover duration-300 rounded-xl text-white font-bold'>Add new record</button>
            </div>
            <div className='w-full flex justify-center'>
                <div className='relative'>
                    <img src='LOGO.png' />
                    <p className='absolute -bottom-7 -right-7 text-sm font-bold'>Search app</p>
                </div>
            </div>
        </>
    )
}

export default Header