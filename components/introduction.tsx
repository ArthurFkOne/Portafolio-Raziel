import { Mail, Paperclip } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import Container from "./shared/container";

const Introduction = () => {
    return (
      <Container>
        <div className="text-center" id="home">
            <h3 className="text-xl mb-3">----------</h3>
            <h1 className="text-4xl font-bold mb-3">Raziel Martinez</h1>
            <h2 className="text-xl mb-3">Desarrollador Web y de Aplicaciones</h2>
            <h3 className="text-xl mb-3">----------</h3>
            <div className="flex items-center">
                <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                    <Link className={buttonVariants()} href="#contact">
                     <Mail className="mr-2" />
                     Contactame
                    </Link>

                    <Link className={buttonVariants({variant: 'secondary'})} href="/cv-Raziel.pdf" target="_blank">
                     <Paperclip className="mr-2" />
                     Descargar CV
                    </Link>
                </div>
            </div>
            <Image src="/Perfil3.png" alt="Profile pic" width={500} height={500}/>
        </div>
      </Container>



    )


}

export default Introduction;
