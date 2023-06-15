import React from 'react';
import Image from 'next/image'

const Hero = () => {
    return (
      
      <div className="bg-cover bg-center h-screen bg-slate-950">
        <div className="font-bold justify-center items-center grid grid-cols-2">
        <h1 className="scroll-m-20 text-3xl sm:text-5xl text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text font-extrabold tracking-tight lg:text-5xl pt-10 px-8">Hi! I am a Front-End Web Developer. I do web development in react using Tailwind CSS and Shadcn.ui</h1>
        <div className="grid grid-cols-2 text-white px-10 py-5 space-x-5 space-y-16">
        I have honed my web development skills and become proficient in building dynamic and visually appealing user interfaces using React, Tailwind CSS, and Shadcn/ui.
       <div> With React, I leverage its component-based architecture to create reusable UI elements, enhancing the efficiency and maintainability of my code. 
       </div>
       <div className="font-bold justify-center items-center italic space-y-10"><p>"Muhammad Moaz Munawar"</p>
        <p>BS Computer Science (2021-2025)</p>
        <p>PIAIC Web 3.0 & Metaverse Devoloper (2022-2023)</p>
        </div>
        <Image src="/background.jpg" alt="Background" width="240" height="240" className=" rounded-full" />

        <div>
        Tailwind CSS empowers me to rapidly style my applications with its utility-first approach, allowing me to easily customize and tweak designs. 
        </div>
        <div>
        Additionally, Shadcn.ui adds a touch of elegance to my user interfaces with its beautiful and responsive shadow effects.
        </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default Hero;