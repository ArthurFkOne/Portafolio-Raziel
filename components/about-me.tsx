import { dataAboutMe, dataSlider } from "@/data";
import Title from "./shared/title";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import Image from "next/image";
const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Sobre mi" subtitle="Conoce más sobre mi"/>
          <div className="grid md:grid-cols-2">
            <div className="py-12 md:py-0 flex items-center justify-center">

                <Carousel opts={
                    {
                        align: "start",
                    }}
                    orientation="vertical"
                    className="w-full max-w-xs h-fit"
                    >
                 <CarouselContent className="-mt-1 h-[200px]">
                    {dataSlider.map((data) =>(
                        <CarouselItem key={data.id}>
                            <div className="flex items-center justify-center">
                                <Image src={data.url} alt="image" width={250} height={400} className="w-full h-auto rounded-lg"/>
                            </div>
                        </CarouselItem>
                    ))}
                 </CarouselContent>
                  <CarouselPrevious/>
                  <CarouselNext/>
                </Carousel>
            </div>

            <div>
            <div className="grid md:grid-cols-3 mt-7 gap-4">
                {dataAboutMe.map((data) => (
                    <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-slate-100 shadow-md dark:bg-slate-800 ">
                        {data.icon}
                        <p className="my-2">{data.name}</p>
                        <p className="text-gray-400">{data.description}</p>
                    </div>
                ))}
            </div>
            <p className="my-8">
            Soy un estudiante de Ingeniería en Software que ha trabajado en distintos tipos de Software,
            enfocados en distintas areas, soy programador de C#  y Python en aplicaciones de escritorio
            y de React NextJs y .net en web. He trabajado tanto en backend como en frontend.
            En los equipos suelo liderar y organizar, aunque también tomo mi responsabilidad como
            programador al momento de trabajar.  Mi numero de proyecto grandes no es muy amplio pero
            busco expandirlo.

            </p>
            <Button>
                <Phone size={20} className="mr-2"/> Contactame
            </Button>
        </div>
        </div>
     </div>

    )
}


export default AboutMe;
