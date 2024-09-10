import { House, Building, UserRound, ListChecks, UsersRound, SquareUserRound, UserPlus, CircleHelp, Globe } from "lucide-react";

export const navbarleftData = [
  {
    name: "",
    image: "",
    index: 0,
  },
];

export const navbarcenterData = [
  {
    icon: House,
    name: "Home",
    to: "/",
    index: 0,
  },

  {
    icon: Building,
    name: "About Us",
    to: "/aboutus",
    index: 1,
  },

  {
    icon: UserRound,
    name: "Villla Co-Ownership",
    to: "/villlacoownership",
    index: 2,
  },

  {
    icon: ListChecks,
    name: "Properties Available",
    to: "propertiesavailable",
    index: 3,
  },

  {
    icon: UsersRound,
    name: "Testimonials",
    to: "testimonials",
    index: 4,
  },

  {
    icon: SquareUserRound,
    name: "Contact",
    to: "contact",
    index: 5,
  },
];

export const navbarrightData = [
  {
    icon: Globe,
    name: "ID",
    to: "/language",
    index: 0,
  },

  {
    icon: UserPlus,
    name: "Login",
    to: "/login",
    index: 1,
  },

  {
    icon: CircleHelp,
    name: "FAQ",
    to: "/faq",
    index: 2,
  },
];
