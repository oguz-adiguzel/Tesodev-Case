import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import mockData from '../data';
import { useNavigate } from 'react-router-dom';

const AddLink = () => {

    const [errorToggle, setErrorToggle] = useState(false)
    const [successToggle, setSuccessToggle] = useState(false)
    const [alertText, setAlertText] = useState('')
    const navigate = useNavigate()

    let searchText = JSON.parse(localStorage.getItem('searchValue'))

    const validations = yup.object().shape({
        nameSurname: yup.string().min(4, 'Name and surname should contain at least 4 words').max(60, 'Name and surname must consist of a maximum of 60 words').required('Required Field'),
        country: yup.string().min(2, 'Country should contain at least 2 words').max(40, 'Country must consist of a maximum of 40 words').required('Required Field'),
        city: yup.string().min(2, 'City should contain at least 2 words').max(40, 'City must consist of a maximum of 40 words').required('Required Field'),
        email: yup.string().email('Must be a valid email').required('Required Field'),
        website: yup.string().url('Please enter a valid url').required('Required Field'),
    })

    const addLink = () => {
        let someName = mockData.data.find((item) => item[1] === values.nameSurname)
        let someEmail = mockData.data.find((item) => item[3] === values.email)
        if (someName) {
            setAlertText('Name and surname are used')
            setErrorToggle(true)
        } else if (someEmail) {
            setAlertText('Email are used')
            setErrorToggle(true)
        } else {
            const records = JSON.parse(localStorage.getItem('records')) || [];
            records.push(values);
            localStorage.setItem('records', JSON.stringify(records));
            setSuccessToggle(true)
            setTimeout(() => {
                setSuccessToggle(false)
            }, 2000);
        }
    }

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
        initialValues: {
            id: new Date().getTime(),
            nameSurname: null,
            company: 'Pixonyx',
            email: null,
            phone: '499-866-1927',
            website: null,
            country: null,
            city: null,
            date: '5/10/2021'
        },
        onSubmit: (values) => {
            addLink()
        },
        validationSchema: validations
    })

    return (
        <div className='w-full bg-[#FCFCFC] relative'>
            {successToggle && <div className='absolute right-5 top-5 w-40 h-10 bg-green-500 rounded-xl text-white font-bold flex justify-center items-center'>
                <p>Eklendi</p>
            </div>}
            <div className='flex items-center w-full px-2 lg:px-32 py-8'>
                <img onClick={()=> navigate('/')} className='cursor-pointer w-40 lg:w-auto' src='LOGO.png' />
                <img className='ml-8' src='back-icon.png' />
                <p onClick={()=> {
                    if(searchText){
                        navigate('/listpage')
                    }else{
                        alert('Search from the home page')
                    }
                }} className='text-[#484848] text-lg lg:text-2xl font-bold ml-3 mb-1 cursor-pointer'>Return to List Page</p>
            </div>
            <div className='w-full lg:w-1/2 px-3 lg-px-0 mx-auto py-10'>
                <form onSubmit={handleSubmit}>
                    <div>

                        <label htmlFor='nameSurname' className={`text-lg font-bold leading-5 ${(errors.nameSurname && touched.nameSurname) && 'text-[#FF0000B2]'}`}>Name Surname</label>
                        <input id='nameSurname' name='nameSurname' value={values.nameSurname} onChange={handleChange} onBlur={handleBlur} className={`w-full max-w-[590px] h-[46px] block outline-none pl-3 border-[1.5px] rounded-lg hover:bg-gray-200 duration-300 mt-2 ${(errors.nameSurname && touched.nameSurname) ? 'border-[#FF0000]' : 'border-[#484848]'}`} type='text' placeholder='Enter name and surname' />
                    </div>
                    {
                        touched.nameSurname && errors.nameSurname && <div class="text-[#FF0000]">
                            {errors.nameSurname}
                        </div>
                    }

                    <div className='mt-10'>
                        <label htmlFor='country' className={`text-lg font-bold leading-5 ${(errors.country && touched.country) && 'text-[#FF0000B2]'}`}>Country</label>
                        <input id='country' name='country' value={values.country} onChange={handleChange} onBlur={handleBlur} className={`w-full max-w-[590px] h-[46px] block outline-none pl-3 border-[1.5px] rounded-lg hover:bg-gray-200 duration-300 mt-2 ${(errors.country && touched.country) ? 'border-[#FF0000]' : 'border-[#484848]'}`} type='text' placeholder='Enter a country' />
                    </div>
                    {
                        touched.country && errors.country && <div class="text-[#FF0000]">
                            {errors.country}
                        </div>
                    }

                    <div className='mt-10'>
                        <label htmlFor='city' className={`text-lg font-bold leading-5 ${(errors.city && touched.city) && 'text-[#FF0000B2]'}`}>City</label>
                        <input id='city' name='city' value={values.city} onChange={handleChange} onBlur={handleBlur} className={`w-full max-w-[590px] h-[46px] block outline-none pl-3 border-[1.5px] rounded-lg hover:bg-gray-200 duration-300 mt-2 ${(errors.city && touched.city) ? 'border-[#FF0000]' : 'border-[#484848]'}`} type='text' placeholder='Enter a city' />
                    </div>
                    {
                        touched.city && errors.city && <div class="text-[#FF0000]">
                            {errors.city}
                        </div>
                    }

                    <div className='mt-10'>
                        <label htmlFor='email' className={`text-lg font-bold leading-5 ${(errors.email && touched.email) && 'text-[#FF0000B2]'}`}>Email</label>
                        <input id='email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} className={`w-full max-w-[590px] h-[46px] block outline-none pl-3 border-[1.5px] rounded-lg hover:bg-gray-200 duration-300 mt-2 ${(errors.email && touched.email) ? 'border-[#FF0000]' : 'border-[#484848]'}`} placeholder='Enter a e-mail (abc@xyz.com)' />
                    </div>
                    {
                        touched.email && errors.email && <div class="text-[#FF0000]">
                            {errors.email}
                        </div>
                    }

                    <div className='mt-10'>
                        <label htmlFor='website' className={`text-lg font-bold leading-5 ${(errors.website && touched.website) && 'text-[#FF0000B2]'}`}>Website</label>
                        <input id='website' name='website' value={values.website} onChange={handleChange} onBlur={handleBlur} className={`w-full max-w-[590px] h-[46px] block outline-none pl-3 border-[1.5px] rounded-lg hover:bg-gray-200 duration-300 mt-2 ${(errors.website && touched.website) ? 'border-[#FF0000]' : 'border-[#484848]'}`} type='text' placeholder='Enter a website (https://xyz.com)' />
                    </div>
                    {
                        touched.website && errors.website && <div class="text-[#FF0000]">
                            {errors.website}
                        </div>
                    }

                    <div className='mt-10 flex justify-end lg:justify-center'>
                        <button type='submit' className='w-[138px] h-[46px] bg-[#204080] hover:bg-[#4F75C2] duration-300 text-white text-lg font-bold ml-20 rounded-xl'>Add</button>
                    </div>
                </form>
            </div>
            <div className='w-full relative'>
                {errorToggle && <div className='w-full lg:w-[375px] h-[137px] bg-[#C4C4C4] rounded-lg absolute right-0 lg:right-10 -bottom-20 p-3'>
                    <div className='flex justify-end'>
                        <img onClick={() => setErrorToggle(!errorToggle)} src='close-icon.png' className='cursor-pointer' />
                    </div>
                    <div className='flex justify-between pr-5'>
                        <div className='flex flex-col justify-between'>
                            <p className='text-sm font-bold text-[#090A0A]'>Error while adding link element</p>
                            <p className='text-sm mt-3'>{alertText}</p>
                        </div>
                        <div className='w-28 h-10 rounded-full bg-[#FF4E78] flex justify-center items-center mt-2'>
                            <p className='font-semibold text-white'>Error</p>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default AddLink