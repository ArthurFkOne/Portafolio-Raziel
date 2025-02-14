"use client";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "./ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";


const CForm = () => {
    const [successForm, setSuccessForm] = useState(false);


    const formSchema = z.object({
        name: z.string().min(2, {
            message: "El nombre es requerido",
        }),
        email: z.string().email({
            message: "El email es requerido",
        }),
        message: z.string().min(10, {
            message: "El mensaje es requerido",
        }),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const response = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(values),
        });
        if(response.status === 200){
            setSuccessForm(true);
        }
    };

    return (
            <Form {...form}>
             {successForm ? (
            <div>
                <h1>Mensaje enviado correctamente</h1>
            </div>
        ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Nombre" {...field} className="dark:bg-slate-800"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Email" {...field} className="dark:bg-slate-800"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="Mensaje" {...field} className="dark:bg-slate-800"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Enviar</Button>
            </form>
        )}
        </Form>
        
    );
};

export default CForm;