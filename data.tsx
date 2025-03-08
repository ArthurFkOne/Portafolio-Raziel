import { BellPlus, BookText, Briefcase, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, UsersRound, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Experiencia",
        icon: <Briefcase />,
        description: "6 meses de experiencia",
    },
    {
        id: 2,
        name: "Clientes",
        icon: <UsersRound />,
        description: "3 clientes satisfechos",
    },
    {
        id: 3,
        name: "Proyectos",
        icon: <Wrench />,
        description: "3 completados",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "Sobre mi",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    {
        id: 3,
        title: "Portafolio",
        icon: <CodeSquare size={20} />,
        link: "#project",
    },
    {
        id: 4,
        title: "Contacto",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/csharp.png",
    },
    {
        id: 2,
        url: "/Python-n.png",
    },
    {
        id: 3,
        url: "/react.png",
    },
    {
        id: 4,
        url: "/net.png",
    },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Veterinaria",
        image: ["/VeterinariaHome.png", "/Veterinaria.png", "/VeterinariaCode.png"],
        urlGithub: "https://github.com/ArthurFkOne/Veterinaria.git",
        urlDemo: "#!",
        problema: "Una veterinaria buscaba una manera de agilizar el proceso de las citas de los clientes, para que el usuario pudiera agendar una cita con un solo click ademas de que el usuario pudiera comprar medicamentos para su mascota",
        description: "En este proyecto se realizo un website de una veterinaria con un crud de citas, medicamentos, etc. Yo estuve encargado del frontend y el backend en la pagina del Home el cual trabaje con tecnologias de C# y ASP.NET.",
    },
    {
        id: 2,
        title: "Hades",
        image: ["/hades.jpg", "/hades2.jpg", "/hades3.jpg"],
        urlGithub: "#!",
        urlDemo: "#!",
        problema: "La empresa Dwit tenia un programa de consola que hacia el timbrado de facturas, pero tenia diferentes problemas, como los constantes crasheos, alentamiento general por una factura y carencia de apartado visual",
        description: "En este proyecto se le dio un mantenimiento perfectivo a una aplicacion de escritorio usando C# con WPF,con el fin de que el usuario puede usarlo de manera mas comoda. Mi trabajo fue el de crear un sistema de filtros para los diferentes tipos de facturas, buscando que el usuario pudiera desactivar los filtros que no necesitaba, para que el programa corriera mas rapido.",
    },
    {
        id: 3,
        title: "Horizon Studio Launcher",
        image: ["/launcher.png", "/LauncherA.png", "/launchercode.png"],
        urlGithub: "https://github.com/ArthurFkOne/LauncherMinecraft.git",
        urlDemo: "#!",
        problema: "El cliente Horizon Studio queria una manera de que los usuarios pudieran descargar el juego 'Minecraft' y modpacks de este de manera mas comoda y rapida",
        description: "En este proyecto se realizo un launcher de 'Minecraft', para ello se uso tecnologias Python como CustomTkinter para el apartado visual y minecraft_launcher_lib para la descarga de los modpacks y el juego. Este proyecto fue realizado solo por mi y me encargue de todos los procesos que conllevaba como el uso de hilos para el funcionamiento de la aplicacion.",
    },
];


export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+52 984 435 0825",
        link: "tel:+529844350825",
        icon: <Phone />,
    },
    {
        id: 2,
        title: "Github",
        subtitle: "github.com/ ArthurFkOne",
        link: "https://github.com/ArthurFkOne",
        icon: <Code2 />,
    },
    {
        id: 3,
        title: "Email",
        subtitle: "arturohrh@ gmail.com",
        link: "mailto:arturohrh@gmail.com",
        icon: <Inbox />,
    },
];
