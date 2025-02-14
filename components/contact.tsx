import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";
import Form from "./cform";
const Contact = () => {
    return (
        <div className="p-6 md:px-12 md:py-44 max-w-xl mx-auto" id="contact">
            <Title title="Contacto" subtitle="Ponte en contacto conmigo"/>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div>
                    {dataContact.map((data) => (
                        <div key={data.id} className="flex flex-col items-center dark:bg-slate-800  rounded-lg mb-5 p-4">
                            {data.icon}
                            <p>{data.title}</p>
                            <p>{data.subtitle}</p>
                            <Link href={data.link} className="text-blue-500 hover:text-blue-600">
                                Enviar mensaje
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="col-span-2">
                    <Form />
                </div>
            </div>
            
        </div>
    )
}

export default Contact;