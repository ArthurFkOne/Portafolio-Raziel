"use client";
import { Carousel, CarouselContent, CarouselItem} from "./ui/carousel";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card" 
import Autoplay from "embla-carousel-autoplay"
import {GithubIcon } from "lucide-react";    
import { dataPortfolio} from "@/data";
import Image from "next/image";
import Title from "./shared/title";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Projects = () =>{
    return(
     <div className="p-4 max-w-8xl md:py-24 mx-auto" id="project"> 
       <Title title="Portafolio" subtitle="Proyectos"/>
       <div className="grid md:grid-cols-3 gap-14 mt-4">
        {dataPortfolio.map((data) =>(
        <div key={data.id}>
         <HoverCard>
          <HoverCardTrigger >
            <Card className="w-full h-400 rounded-2xl">
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription className="flex justify-center">
                <Carousel
                  plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}>
                  <CarouselContent>
                    {data.image.map((image, index) => (
                      <CarouselItem key={index}>
                        <Image 
                          src={image} 
                          alt={`Imagen ${index + 1} de ${data.title}`} 
                          width={250} 
                          height={400} 
                          className="mt-4 w-full h-auto rounded-2xl"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </CardDescription>
            </CardHeader>
            <CardContent >           
             <Link className={buttonVariants()} href={data.urlGithub}>GitHub <GithubIcon/></Link>
            </CardContent>
            </Card>
           </HoverCardTrigger>
           <HoverCardContent className="mb-40 w-1/2" >
              <p>Problema:  {data.problema}</p>
              <p>Solucion:  {data.description}</p>
            </HoverCardContent>
          </HoverCard>
          </div>
        ))}
       </div>
      </div>
    );
};

export default Projects;