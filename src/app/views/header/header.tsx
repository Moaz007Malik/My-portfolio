"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-red-900 to-slate-950">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="font-bold flex items-center h-20 gap-4 px-6 bg-gradient-to-tr from-red-400 via-pink-500 to-blue-900 text-transparent bg-clip-text">
          <Avatar>
            <AvatarImage src="https://github.com/Moaz007Malik.png" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          My Portfolio
          <div>
            <Badge className="h-6 items-center">PIAIC Student</Badge>
          </div>
        </div>
        <div className="flex items-center justify-center sm:justify-end gap-10 content-start px-8">
          <a href="https://scarlet-chantal-60.tiiny.site/">
            <Button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y--1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full">Download CV</Button>
          </a>
          <a href="https://www.linkedin.com/in/moaz-malik-b180a3262/">
            <Button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y--1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full">LinkedIn</Button>
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y--1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-full">My Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>My Profile</DialogTitle>
                <DialogDescription>
                  Everything about me is given below:
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name:
                  </Label>
                  <Input id="name" defaultValue="Muhammad Moaz Munawar" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Email:
                  </Label>
                  <Input id="email" defaultValue="moaz007malik@gmail.com" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Contact No.
                  </Label>
                  <Input id="phonenumber" defaultValue="+92 310 4468909" className="col-span-3" />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Header;
