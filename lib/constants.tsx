import {
    LayoutDashboard,
    Shapes,
    ShoppingBag,
    Tag,
    UsersRound,
  } from "lucide-react";   /* libreria */
  
  export const navLinks = [
    {
      url: "/",
      icon: <LayoutDashboard />,
      label: "Dashboard",
    },
    {
      url: "/collections",
      icon: <Shapes />,
      label: "Colecciones",
    },
    {
      url: "/products",
      icon: <Tag />,
      label: "Productos",
    },
    {
      url: "/orders",
      icon: <ShoppingBag />,
      label: "Compras",
    },
    {
      url: "/customers",
      icon: <UsersRound />,
      label: "Clientes",
    },
  ];