import React from 'react'
import Iframe from 'react-iframe';

const Footer = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-between items-center bg-[#294E98B8] px-5 lg:px-20 py-5'>
            <img className='w-96' src='footer-image.png' />
            <div className='text-white text-lg lg:px-20'>
                <p className='font-bold'>İletişim</p>
                <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul</p>
                <p className='font-bold mt-10'>Email: bilgi@tesodev.com</p>
            </div>
            <div className='mt-5 lg:mt-0'>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2797473786727!2d28.888373176925313!3d41.01913527134901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0!5e0!3m2!1str!2str!4v1701017535394!5m2!1str!2str"
                    
                    id=""
                    className="w-full lg:w-[467px] lg:h-[222px]"
                    display="block"
                    position="relative" />
            </div>
        </div>
    )
}

export default Footer