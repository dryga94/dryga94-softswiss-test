import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";

// хеш для того чтобы не релоадилась страница без роутера...

export const navigationConfig = [
  {
    id: 1,
    title: "Home",
    href: "#",
  },
  {
    id: 2,
    title: "Products",
    href: "#products",
  },
  {
    id: 3,
    icon: CartIcon,
    title: "Cart",
    href: "#cart",
  },
];
