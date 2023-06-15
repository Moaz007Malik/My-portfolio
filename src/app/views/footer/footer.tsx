import { CalendarDays } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger, } from "@/components/ui/hover-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

const Footer = () => {
    return <div className= "bg-gradient-to-t from-red-900 to-slate-950 h-30">
    <div className=" flex items-center">
    <div className="grid grid-cols-2">
    <div><HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="bg-gradient-to-tr from-red-400 via-pink-500 to-blue-900 text-transparent bg-clip-text">@Moaz Malik | All Rights Reserved. </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/Moaz007Malik.png" />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Moaz Malik</h4>
            <p className="text-sm">
              Web Developer – in Typescript with Tailwind CSS and NextJS.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined May 2023
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
    </div>
    <div className="grid grid-cols-5 px-10 flex justify-end gap-4 ">
        <a href="https://youtube.com/@moaz007malik"><Button className= "text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full shadow-lg shadow-red-700 dark:shadow-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Youtube</Button></a>
        <a href="https://www.facebook.com/moaz.malik.69/"><Button className= "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full shadow-lg shadow-blue-700 dark:shadow-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Facebook</Button></a>
        <a href="https://instagram.com/i.am.maniac_?igshid=MzNlNGNkZWQ4Mg=="><Button className= "text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full shadow-lg shadow-purple-700 dark:shadow-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Instagram</Button></a>
        <a href="https://github.com/Moaz007Malik"><Button className= "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full shadow-lg shadow-gray-800 dark:shadow-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Github</Button></a>
        <a href="https://twitter.com/MoazMalik12?t=WxZbLtBQF9_jyrVe9u1ndA&s=09"><Button className= "text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full shadow-lg shadow-blue-500 dark:shadow-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700">Twitter</Button></a>
    </div>
    </div>
    </div>
    <p className="px-4 text-bold bg-purple-500 text-transparent bg-clip-text"> ↓ FAQ ↓</p>
    <Accordion type="single" collapsible className="grid grid-cols-4 px-4 text-bold bg-yellow-400 text-transparent bg-clip-text">
      <AccordionItem value="item-1" className="px-8">
        <AccordionTrigger>Am I experienced?</AccordionTrigger>
        <AccordionContent>
          No. I'm at learning base right now.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="px-8">
        <AccordionTrigger>Have you ever tried React?</AccordionTrigger>
        <AccordionContent>
          No. It's my first experience on react.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="px-8">
        <AccordionTrigger>What coding languages you know about?</AccordionTrigger>
        <AccordionContent>
          I have knowledge of C++, HTML and Typescript.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="px-8">
        <AccordionTrigger>Any future projects you will start working on?</AccordionTrigger>
        <AccordionContent>
          First I have to learn, then I'll definitely work on projects.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
    </div>
};
export default Footer;