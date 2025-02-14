import Link from "next/link";
import { Separator } from "./ui/separator";
const Footer = () => {
    return (
        <footer className="max-w-3xl mx-auto">
            <div className="md:flex md:justify-between ">
                <div>
                    <h4 className="text-3xl font-bold my-6 md:my-0">Raziel Martinez</h4>
                </div>
                <div className="px-2 flex justify-between md:gap-8 items-center">
                    <Link href="#about-me">
                        <p>Sobre mi</p>
                    </Link>
                    <Link href="#project">
                        <p>Proyectos</p>
                    </Link>
                    <Link href="#contact">
                        <p>Contacto</p>
                    </Link>
                </div>
            </div>
            <Separator className="my-6"/>
            <div className="flex justify-center items-center">
                <p>© 2025 Raziel Martinez</p>
            </div>
        </footer>
    );
};

export default Footer;