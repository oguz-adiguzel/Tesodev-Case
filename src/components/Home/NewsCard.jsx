import React from 'react'

const NewsCard = ({item}) => {
    return (
        <div className='w-full'>
            <img className='w-full' src={item.img} />
            <p className='text-lg font-bold pr-14'>{item.title}</p>
            <div className='flex space-x-3 items-center text-[#6C7072] text-sm '>
                <p>{item.date}</p>
                <div className='w-1 h-1 rounded-full bg-[#6C7072]'></div>
                <p>{item.writer}</p>
            </div>
        </div>
    )
}

export default NewsCard