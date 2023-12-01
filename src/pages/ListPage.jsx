import React, { useEffect, useState } from 'react'
import mockData from '../data'
import { useNavigate } from 'react-router-dom'

const ListPage = () => {

    const [inputText, setInputText] = useState()
    const [searchData, setSearchData] = useState()
    const [alertToggle, setAlertToggle] = useState(false)
    const [selected,setSelected] = useState('')
    const navigate = useNavigate()

    const options = [
        { value: "", text: "Order By", disabled: true, selected: true },
        { value: "nameAscending", text: "Name ascending", disabled: false, selected: false, },
        { value: "nameDescending", text: "Name descending", disabled: false, selected: false },
        { value: "yearAscending", text: "Year ascending", disabled: false, selected: false },
        { value: "yearDescending", text: "Year descending", disabled: false, selected: false },
    ]

    const [currentPage, setCurrentPage] = useState(1);
    const searchPerPage = 5;

    const indexOfLastSearch = currentPage * searchPerPage;
    const indexOfFirstSearch = indexOfLastSearch - searchPerPage;
    const currentSearch = searchData?.slice(indexOfFirstSearch, indexOfLastSearch);

    const pageButtons = Array.from({ length: Math.ceil(searchData?.length / searchPerPage) }).map((_, index) => index + 1);

    const visiblePageButtons = pageButtons.slice(Math.max(0, currentPage - 1), Math.min(pageButtons.length, currentPage + 2));

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    useEffect(() => {
        let searchText = JSON.parse(localStorage.getItem('searchValue'))
        setInputText(searchText)
        setSearchData(mockData.data.filter((item) => item[1].toLowerCase().includes(searchText?.toLowerCase())))
    }, [])

    useEffect(()=>{
        if(selected === 'nameAscending'){
            nameAscending()
        }
        if(selected === 'nameDescending'){
            nameDescending()
        }
        if(selected === 'yearAscending'){
            yearAscending()
        }
        if(selected === 'yearDescending'){
            yearDescending()
        }
    },[selected])

    const search = () => {
        if (inputText.length >= 2) {
            setSearchData(mockData.data.filter((item) => item[1].toLowerCase().includes(inputText?.toLowerCase())))
        } else {
            setAlertToggle(!alertToggle)
        }
    }

    const nameAscending = () => {
        const arr = [...searchData].sort((a, b) => {
          const nameSurnameA = a[1].toLowerCase();
          const nameSurnameB = b[1].toLowerCase();
    
          if (nameSurnameA < nameSurnameB) {
            return -1;
          }
          if (nameSurnameA > nameSurnameB) {
            return 1;
          }
          return 0;
        });
    
        setSearchData(arr);
      };

      const nameDescending = () => {
        const arr = [...searchData].sort((a, b) => {
          const nameSurnameA = a[1].toLowerCase();
          const nameSurnameB = b[1].toLowerCase();
    
          if (nameSurnameB < nameSurnameA) {
            return -1;
          }
          if (nameSurnameB > nameSurnameA) {
            return 1;
          }
          return 0;
        });
    
        setSearchData(arr);
      };

      const yearDescending = () => {
        const arr = [...searchData].sort((a, b) => {
          const dateA = new Date(a[8]);
          const dateB = new Date(b[8]);
    
          if (dateB < dateA) {
            return -1;
          }
          if (dateB > dateA) {
            return 1;
          }
          return 0;
        });
    
        setSearchData(arr);
      };

      const yearAscending = () => {
        const arr = [...searchData].sort((a, b) => {
          const dateA = new Date(a[8]);
          const dateB = new Date(b[8]);
    
          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }
          return 0;
        });
    
        setSearchData(arr);
      };

    return (
        <div className='w-full bg-[#FCFCFC] py-8'>
            <div className='w-full px-2 lg:px-10 flex flex-col lg:flex-row items-center lg:items-center justify-around'>
                <img onClick={()=> navigate('/')} className='cursor-pointer' src='LOGO.png' />
                <div className='flex justify-center w-full lg:w-1/2 pr-0 lg:pr-52 mt-5 lg:mt-0'>
                    <input value={inputText} onChange={(e) => setInputText(e.target.value)} className='w-full max-w-[509px] h-12 border border-[#000000] rounded-xl pl-5' type='text' />
                    <button onClick={() => search()} className='w-[138px] h-[46px] bg-button-default hover:bg-button-hover duration-300 rounded-xl text-white font-bold text-lg ml-6'>Search</button>
                </div>
                <div className='flex mt-5 lg:mt-0'>
                    <button onClick={()=> navigate('/addLink')} className='w-[216px] h-[46px] bg-button-default hover:bg-button-hover duration-300 rounded-xl text-white font-bold'>Add new record</button>
                </div>
            </div>
            <div className='container mx-auto mt-5 lg:mt-0'>
                <div className='w-full flex justify-end pr-2 lg:pr-40'>
                    <select
                        value={selected} 
                        onChange={(e) => setSelected(e.target.value)} 
                        className="bg-[#F3F2F2] border rounded-lg text-lg border-[#414141] outline-none appearance-none px-2 py-1">
                        {options.map((option) => (
                            <option className='py-1 mt-6' key={option.value} disabled={option.disabled} selected={option.selected} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='w-full lg:container py-10 mx-auto'>
                {searchData?.length > 0 ? currentSearch?.map((item) => (
                    <div className='py-5 border-b border-[#7E7E7E] w-full lg:w-1/2 ml-0 lg:ml-60'>
                        <div className='flex justify-between py-5 hover:bg-[#4F75C236] duration-300 rounded-lg px-4'>
                            <div className='flex items-center '>
                                <img src='location-icon.png' />
                                <div className='ml-3'>
                                    <p>{item[1]}</p>
                                    <p>{`${item[1]}, ${item[7]}, ${item[6]}`}</p>
                                </div>
                            </div>
                            <div>
                                <p>{item[8]}</p>
                                <p>{item[6]}</p>
                            </div>
                        </div>
                    </div>
                )): <div className='w-full text-red-500 flex justify-center'>
                    <p>No suitable results found</p>
                    </div>}

                <div className='w-full lg:w-1/2 mt-5 ml-0 lg:ml-60 flex justify-center'>
                    {currentPage > 1 && (
                        <button
                            className='w-20 h-6 border border-[#484848] rounded mx-1'
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            {'Previous'}
                        </button>
                    )}
                    {visiblePageButtons.map((pageNumber, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(pageNumber)}
                            style={{
                                backgroundColor: pageNumber === currentPage ? '#204080' : 'white',
                                color: pageNumber === currentPage ? 'white' : 'black'
                            }}
                            className='w-6 h-6 border border-[#484848] rounded mx-1'
                        >
                            {pageNumber}
                        </button>
                    ))}

                    {currentPage < pageButtons.length - 2 && <span className='px-2'>...</span>}

                    {currentPage < pageButtons.length - 4 && (
                        <button className='w-6 h-6 border border-[#484848] rounded mx-1' onClick={() => handlePageChange(pageButtons.length)}>
                            {pageButtons.length-2}
                        </button>
                    )} 
                    {currentPage < pageButtons.length - 3 && (
                        <button className='w-6 h-6 border border-[#484848] rounded mx-1' onClick={() => handlePageChange(pageButtons.length)}>
                            {pageButtons.length-1}
                        </button>
                    )} 

                    {currentPage < pageButtons.length - 2 && (
                        <button className='w-6 h-6 border border-[#484848] rounded mx-1' onClick={() => handlePageChange(pageButtons.length)}>
                            {pageButtons.length}
                        </button>
                    )} 
                    
                    {currentPage < pageButtons.length && (
                        <button
                            className='w-20 h-6 border border-[#484848] rounded mx-1'
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            {'Next'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ListPage