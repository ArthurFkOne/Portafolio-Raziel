import * as React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message,
}) => {
    return (
        <div>
            <h1>Nuevo mensaje de {name}</h1>
            <p>Email: {email}</p>
            <p>Mensaje: {message}</p>
        </div>
    );
};

export default EmailTemplate;