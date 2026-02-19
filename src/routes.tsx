import type { ReactNode } from "react";
import Home from "./pages/Home";
import Page from "./pages/Page";

export type RouteConfig = {
  path: string;
  label: string;
  element: ReactNode;
};

export const routes: RouteConfig[] = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/thing-1", label: "Thing 1", element: <Page title="Thing 1" /> },
  { path: "/thing-2", label: "Thing 2", element: <Page title="Thing 2" /> },
  { path: "/thing-3", label: "Thing 3", element: <Page title="Thing 3" /> },
  { path: "/thing-4", label: "Thing 4", element: <Page title="Thing 4" /> },
  { path: "/thing-5", label: "Thing 5", element: <Page title="Thing 5" /> },
  { path: "/thing-6", label: "Thing 6", element: <Page title="Thing 6" /> },
];
