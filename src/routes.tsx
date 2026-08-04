import type { ReactNode } from "react";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Practica from "./pages/Practica";
import Practicas from "./pages/Practicas";

export type RouteConfig = {
  path: string;
  element: ReactNode;
};

export const routes: RouteConfig[] = [
  { path: "/", element: <Home /> },
  { path: "/practicas", element: <Practicas /> },
  { path: "/practicas/:slug", element: <Practica /> },
  { path: "/nosotros", element: <Nosotros /> },
  { path: "/contacto", element: <Contacto /> },
];
