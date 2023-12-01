import React, { useEffect, useState } from 'react';
import Footer from '../components/Home/Footer';
import News from '../components/Home/News';
import Header from '../components/Home/Header';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import mockData from '../data';

const Home = () => {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('')
  const [searchData, setSearchData] = useState()
  const [firstThreeElements, setFirstThreeElements] = useState(null)
  const [alertToggle, setAlertToggle] = useState(false)
  
  useEffect(() => {
    if (searchData) setFirstThreeElements(searchData.slice(0, 3))
  }, [searchData])

  useEffect(() => {
    if (alertToggle) {
      setTimeout(() => {
        setAlertToggle(!alertToggle)
      }, 1500);
    }
  }, [alertToggle])

  useEffect(()=>{
    if(searchText.length !== 0) search()
  },[searchText])

  const search = () => {
    if (searchText.length >= 2) {
      setAlertToggle(false)
      localStorage.setItem('searchValue', JSON.stringify(searchText));
      setSearchData(mockData.data.filter((item) => item[1].toLowerCase().includes(searchText.toLowerCase())))
    } else {
      setFirstThreeElements(null)
      setAlertToggle(true)
    }
  }

  return (
    <>
      <div className='container mx-auto py-10'>
        <Header />
        <div className='w-full lg:w-2/3 mx-auto lg:px-24 mt-10'>
          <p className='text-lg lg:text-[32px] font-bold leading-8 text-center'>Find in records</p>
        </div>
        <div className='w-full lg:w-2/3 mx-auto px-28 mt-5'>
          <div className='w-full max-w-[646px] mx-auto flex flex-col lg:flex-row justify-center items-center relative'>
            <img className='absolute left-3 top-4' src='search-icon.png' />
            <input onChange={(e) => setSearchText(e.target.value)} className='w-full max-w-[646px] h-12 border-2 border-[#204080] rounded-xl pl-10' type='text' />
            <button disabled={searchText.length === 0 ? true : false} onClick={() => {
              if(searchData?.length > 3) navigate('/listpage')
              }} className={`w-[138px] h-[46px] mt-3 lg:mt-0 bg-button-default hover:bg-button-hover duration-300 rounded-xl text-white font-bold text-lg ml-2 lg:absolute -right-40 ${searchText.length === 0 ? 'cursor-not-allowed': 'cursor-pointer'}`}>Search</button>
          </div>
        </div>
        <div className='w-full px-5 lg:px-0 lg:w-2/3 mx-auto flex justify-center items-center mt-4'>

          {(firstThreeElements) && <motion.div
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1 }} className='w-full lg:w-[717px] border border-[#484848] py-3 px-10 rounded-2xl'>
            {
              firstThreeElements?.map((item) => (
                <div key={item[0]}>
                  <div className='flex items-center py-3'>
                    <img className='w-6 h-8' src='location-icon.png' />
                    <div className='ml-4'>
                      <p>{item[1]}</p>
                      <p className='text-sm text-[#72777A]'>{`${item[1]}, ${item[7]}, ${item[6]}`}</p>
                    </div>
                  </div>
                  <div className='w-3/4 mx-auto h-[1px] bg-[#F2F4F5]'></div>
                </div>
              ))
            }
            {searchData.length > 3 && <p onClick={() => navigate('/listpage')} className='text-center font-bold mt-2 cursor-pointer'>Show more...</p>}
            {firstThreeElements.length === 0 && <div className='w-full text-center text-red-500'>No suitable results found</div>}
          </motion.div>}
          {alertToggle && <div className='w-60 h-10 border border-red-500 rounded-xl flex justify-center items-center'>
            <p className='text-red-500 font-bold'>Enter at least 2 words</p>
          </div>}

        </div>
        <div className='w-full mx-auto mt-14'>
          <News />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home