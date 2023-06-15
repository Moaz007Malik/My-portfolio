import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image'

const Hero5 = () => {
    return (
        <div className="bg-cover bg-center h-screen bg-slate-950">
            <div className=" text-bold text-white grid grid-cols-2 px-10 py-2 ">
        <div className=" "> 
        <Image src="/Certificate2.jpg" alt="Certificate2"  width="480" height="152"  className=" w-auto h-auto rounded-xl " style={{ position: 'absolute', top: '2300px', right: '100px' }}/>  
        </div>
        <div className=" px-1 py-2 "
        style={{ position: 'absolute', bottom: '-1850px', left: '150px' }}> 
        Second course which I have completed on bitdegree is
        <div>
        </div>
        <div className=" scroll-m-20 text-2xl sm:text-3xl text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-green-900 bg-clip-text font-extrabold tracking-tight lg:text-3xl px-4 ">An Interactive Solidity</div>
        </div>
        </div>
        <div className="grid grid-cols-2">
        <h2 className="scroll-m-20 text-2xl sm:text-4xl text-3xl font-bold text-transparent bg-gradient-to-r from-pink-800 to-purple-600 bg-clip-text font-extrabold tracking-tight lg:text-4xl pt-10 px-14">
        Contact Me:
      </h2>
      <div>
      <Image src="/rotating-earth.gif" alt="Background"  width="276" height="276"  className="w-auto h-auto rounded-full" style={{ position: 'absolute', bottom: '-2425px', right: '230px' }}/>
      </div>
      <div className="px-24 py-2">
      <Card className=" bg-[url('/background-contact-me.gif')] text-white">
      <CardHeader className="space-y-0 rounded-lg">
        <div className="space-y-1">
          <CardTitle>You can ask me anything here...</CardTitle>
          <div className="grid grid-cols-2 space-x-2">
          <div className="space-y-1">
              <Label htmlFor="firstname">First Name</Label>
              <Input id="firstname" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="lastname">Last Name</Label>
              <Input id="lastname" />
            </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" />
            </div>
           <div className="space-y-1">
              <Label htmlFor="question">Question</Label>
              <Input id="question" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="number">My Contact Number</Label>
              <Input id="number" value="+92 310 4468909" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="address">My Address</Label>
              <Input id="adress" value="Block C-2, Johar Town, Lahore" />
            </div>
            <div className="py-3">
              <Button className= "transition ease-in-out delay-150 bg-gradient-to-r from-purple-800 to-pink-600 hover:-translate-y--1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full">
                Send
              </Button>
            </div>
        </div>
      </CardHeader>
    </Card> 
      </div>
        </div>
        </div>
    )
};

export default Hero5;