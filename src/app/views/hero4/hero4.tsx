import React from 'react';
import Image from 'next/image'

const Hero4 = () => {
    return (
        <div className="bg-cover bg-center h-screen bg-slate-950">
            <div className=" text-bold text-white grid grid-cols-2 px-10 py-2 ">
        <Image src="/Certificate3.jpg" alt="Certificate3"  width="480" height="152" className=" w-auto h-auto rounded-xl " style={{ position: 'absolute', top: '1900px', left: '100px' }}/>  
        <div className=" px-1 py-2 "
        style={{ position: 'absolute', bottom: '-1450px', right: '150px' }}> 
        Second course which I have completed on bitdegree is
        <div className=" scroll-m-20 text-2xl sm:text-3xl text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-green-900 bg-clip-text font-extrabold tracking-tight lg:text-3xl px-4 ">An Interactive Solidity</div>
        </div>
        </div>
        </div>
    )
};

export default Hero4;