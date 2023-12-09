import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAppMenuContext } from "../../Context/ContextMenu";
import { useAppShopContext } from "../../Context/ContextShop";
import ShopContainer from "../shop/shopContainer";
import {
  HeaderContainerStyled,
  NavbarContainerStyled,
  LinksContainerStyled,
  LinkContainerStyled,
  IconStyled,
  SpanStyled,
  HamburguerStyled,
  LinkStyled,
  MotionDivStyled,
} from "./HeaderStyles";
import { IoIosHome } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { PiShoppingBagFill } from "react-icons/pi";
import { BiMenuAltRight } from "react-icons/bi";
import { IoFitnessSharp } from "react-icons/io5";
import { IconLength } from "../shop/IconLenght";
import { HamburguerMenu } from "../HamburguerMenu/HamburguerMenu";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useAppMenuContext(); // Context para abrir el menú hamburguesa
  const { isShopOpen, toggleShop } = useAppShopContext(); // Context para abrir el carrito de compras

  return (
    <HeaderContainerStyled>
      <NavbarContainerStyled>
        <div>
          <Link to="/Home">
            <img src="logo.jpeg" alt="Logo" />
          </Link>
        </div>
        <LinksContainerStyled isMenuOpen={isMenuOpen}>
          <LinkContainerStyled>
            <MotionDivStyled
              whileTap={{ scale: 1.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <IconStyled>
                <IoIosHome />
              </IconStyled>

              <LinkStyled to="/Home">
                <SpanStyled>Home</SpanStyled>
              </LinkStyled>
            </MotionDivStyled>
          </LinkContainerStyled>
          <LinkContainerStyled>
            <MotionDivStyled
              whileTap={{ scale: 1.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <IconStyled>
                <IoFitnessSharp />
              </IconStyled>

              <LinkStyled to="/About">
                <SpanStyled>Sobre mí</SpanStyled>
              </LinkStyled>
            </MotionDivStyled>
          </LinkContainerStyled>
          <LinkContainerStyled>
            <MotionDivStyled
              whileTap={{ scale: 1.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <IconStyled>
                <PiShoppingBagFill />
              </IconStyled>
              <LinkStyled to="/Products">
                <SpanStyled>Productos</SpanStyled>
              </LinkStyled>
            </MotionDivStyled>
          </LinkContainerStyled>
          <LinkContainerStyled>
            <MotionDivStyled
              whileTap={{ scale: 1.3 }}
              whileHover={{ scale: 1.1 }}
            >
              <IconStyled>
                <BsFillPersonFill />
              </IconStyled>
              <LinkStyled to="/Contact">
                <SpanStyled>Contacto</SpanStyled>
              </LinkStyled>
            </MotionDivStyled>
          </LinkContainerStyled>
          <IconStyled onClick={toggleShop}>
            <IconLength />
          </IconStyled>

          <HamburguerStyled onClick={toggleMenu}>
            <motion.div whileTap={{ scale: 1.2 }}>
              <BiMenuAltRight />
            </motion.div>
          </HamburguerStyled>
          {/*Lógica para desplegar el menú hamburguesa*/}
          {isMenuOpen && <HamburguerMenu />}
          {/*Lógica para desplegar el carrito de compras*/}
          {isShopOpen && <ShopContainer isOpen={isShopOpen} />}
        </LinksContainerStyled>
      </NavbarContainerStyled>
    </HeaderContainerStyled>
  );
};

export default Header;
