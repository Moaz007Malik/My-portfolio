import React from 'react';
import Image from 'next/image'

const Hero3 = () => {
    return (
        <div className="bg-cover bg-center h-screen bg-slate-950">
            <h2 className="scroll-m-20 text-2xl sm:text-4xl text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-900 bg-clip-text font-extrabold tracking-tight lg:text-4xl pt-10 px-14">
        Certifications
      </h2>
      <div className=" text-bold text-white grid grid-cols-2 px-10 py-2 ">
        I have completed many online courses on different websites. Some certifications are given below from bitdegree: 
        <Image src="/Certficate1.jpg" alt="Certificate"  width="500" height="309"  className=" rounded-xl " style={{ position: 'absolute', top: '1500px', right: '100px' }}/>  
        <div className=" px-4 py-2 "
        style={{ position: 'absolute', bottom: '-1050px', left: '150px' }}> 
        First course which I have completed on bitdegree is
        <div className=" scroll-m-20 text-2xl sm:text-3xl text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-green-900 bg-clip-text font-extrabold tracking-tight lg:text-3xl px-4 ">HTML and CSS Online Course</div>
        </div>
        </div>
        </div>
    )
};

export default Hero3;