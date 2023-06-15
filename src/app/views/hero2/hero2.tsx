"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

const Hero2 = () => {
  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);

  const handleShowBox1 = () => {
    setShowBox1(true);
  };

  const handleCloseBox1 = () => {
    setShowBox1(false);
  };

  const handleShowBox2 = () => {
    setShowBox2(true);
  };

  const handleCloseBox2 = () => {
    setShowBox2(false);
  };

  const handleShowBox3 = () => {
    setShowBox3(true);
  };

  const handleCloseBox3 = () => {
    setShowBox3(false);
  };


  return (
    <div className="bg-cover bg-center h-screen bg-slate-950">
      <h2 className="scroll-m-20 text-2xl sm:text-4xl text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-900 bg-clip-text font-extrabold tracking-tight lg:text-4xl pt-10 px-14">
        Skills
      </h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-center h-screen">
          {!showBox1 && (
            <Button
              className="shadow-lg shadow-blue-700 transition ease-in-out delay-150 hover:-translate-y--1 hover:scale-110 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full"
              style={{ position: 'absolute', bottom: '-240px', left: '150px' }}
              onClick={handleShowBox1}
            >
              Technical Skills
            </Button>
          )}

          {showBox1 && (
            <div className=" w-72 h-72 mt-4 rounded shadow-md relative"
            style={{ position: 'absolute', bottom: '-480px', left: '320px' }}>
              <Button
                className="absolute top-2 right-2 bg-link text-white font-bold py-1 px-2 rounded-full"
                
                onClick={handleCloseBox1}
              >
                Close
              </Button>
              {<ScrollArea className="h-72 w-56  text-white font-bold rounded-md border p-4 bg-slate-800">
                
              <li>
  I have learned C++
  </li>
  <li>
  I have knowledge about Typescript and NodeJS
  </li>
  <li>
  I can make projects on React but only using Tailwind CSS and components of Shadcn/ui
  </li>
  <li>
  I have basic knowledge about HTML and CSS
  </li>
  <li>
  I have knowledge about MS Office but only few apps like MS Word, MS Excel and MS Powerpoint
  </li>
</ScrollArea>}
            </div>
          )}
          {!showBox2 && (
            <Button
            className="shadow-lg shadow-blue-700 transition ease-in-out delay-150 hover:-translate-y--1 hover:scale-110 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full"
              style={{ position: 'absolute', bottom: '-320px', left: '150px' }}
              onClick={handleShowBox2}
            >
              Management Skills
            </Button>
          )}

          {showBox2 && (
            <div className="w-72 h-72 mt-4 rounded shadow-md relative"
            style={{ position: 'absolute', bottom: '-560px', left: '320px' }}>
              <Button
                className="absolute top-2 right-2 bg-link text-white font-bold py-1 px-2 rounded-full"
                onClick={handleCloseBox2}
              >
                Close
              </Button>
              {<ScrollArea className="h-72 w-56  text-white font-bold rounded-md border p-4 bg-slate-800">
              <li>
  I have good communication skills
  </li>
  <li>
  I am passionate with my work.
  </li>
  <li>
  Problem Sovling
  </li>
  <li>
  Project Managament
  </li>
  <li>
  Management Team Member of my University
  </li>
</ScrollArea>}
            </div>
          )}
          {!showBox3 && (
            <Button
            className="shadow-lg shadow-blue-700 transition ease-in-out delay-150 hover:-translate-y--1 hover:scale-110 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-full"
              style={{ position: 'absolute', bottom: '-400px', left: '150px' }}
              onClick={handleShowBox3}
            >
              Experience
            </Button>
          )}

          {showBox3 && (
            <div className="w-72 h-72 mt-4 rounded shadow-md relative"
            style={{ position: 'absolute', bottom: '-640px', left: '320px' }}>
            <Button
              className="absolute top-2 right-2 bg-link text-white font-bold py-1 px-2 rounded-full"
                onClick={handleCloseBox3}
              >
                Close
              </Button>
              {<ScrollArea className="h-72 w-56  text-white font-bold rounded-md border p-4 bg-slate-800">
              <li>
  1 Year of Teaching Experience
  </li>
  <li>
  Completed University project of T-Rex Game in C++ using SFML
  </li>
  <li>
  Completed University project of Search Engine using hashing, sorting and linked list in C++
  </li>
</ScrollArea>}
            </div>
          )}
        </div>
        <div>
            <h1 className=" scroll-m-20 text-2xl sm:text-4xl text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-900 bg-clip-text font-extrabold tracking-tight lg:text-4xl pt-10 px-14 "
            style={{ position: 'absolute', bottom: '-150px' }}>
            My Projects
            </h1>
        <Tabs defaultValue="account" className="w-[600px] px-5 mx-10 "
        style={{ position: 'absolute', bottom: '-550px' }}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account" className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 mx-1">T-Rex Game</TabsTrigger>
        <TabsTrigger value="password" className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 mx-1">Search Engine</TabsTrigger>
        <TabsTrigger value="roll" className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 mx-1">Snake Game</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>T-Rex Game</CardTitle>
            <CardDescription>
              I have made this game on C++, also it was my University Project.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <div className="space-y-1">
            <Image src="/dino.gif" alt="Background"  width="480" height="152"  className="w-auto h-auto rounded-full overflow-hidden" />
            </div>
            <div className="space-y-1">
              <a href="https://github.com/Moaz007Malik/TRex-Game"><Button className= " bg-gradient-to-r from-purple-600 " > Download Game </Button></a>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Search Engine</CardTitle>
            <CardDescription>
              I have made Search Engine using Hashing, Sorting and Singly Linked List on C++. It was also my University Project.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
            <Image src="/SearchEngine.gif" alt="Background" width="480" height="152" className="w-auto h-auto rounded-full overflow-hidden" />
            </div>
            <div className="space-y-1">
            <a href="https://github.com/Moaz007Malik/Search-Engine-C"><Button className= " bg-gradient-to-r from-purple-600 " > Download Code </Button></a>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="roll">
        <Card>
          <CardHeader>
            <CardTitle>Snake Game</CardTitle>
            <CardDescription>
              I have made Snake Game on C++. It was just for my practice.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
            <Image src="/Snake.gif" alt="Background" width="480" height="152" className="rounded overflow-hidden" />
            </div>
            <div className="space-y-1">
            <a href="https://github.com/Moaz007Malik/Snake-Game"><Button className= " bg-gradient-to-r from-purple-600 " > Download Game </Button></a>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
