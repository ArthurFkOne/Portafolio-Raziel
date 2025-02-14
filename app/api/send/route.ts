//re_JRHr4BHH_E9QqMmGkEq19QvZjqwAezQGo
import { NextRequest, NextResponse} from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-t";


const resend = new Resend("re_JRHr4BHH_E9QqMmGkEq19QvZjqwAezQGo")
export async function POST(req: NextRequest) {
    try {
        const dataForm = await req.json();
        try{
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["arturohrh@gmail.com"],
                subject: "Nuevo mensaje de contacto",
                react: await EmailTemplate({
                    name: dataForm.name,
                    email: dataForm.email,
                    message: dataForm.message,
                }),
                text: `Arthur`,
            });
            return NextResponse.json({ data }, { status: 200 });
        }catch(error){
            return NextResponse.json(error);
        }
    } catch (error) {
        return NextResponse.json(error);
    }
}


