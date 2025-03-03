import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 183, 255, 0)", "rgba(235, 76, 106)"]
  );
  
  const height = useTransform(scrollY, [0, 100], [120, 60]);

  const toggleDrawer = (isOpen) => () => setOpen(isOpen);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Produtos", path: "/product" },
    { label: "Coleções", path: "/collection" },
    { label: "Nossas Velas", path: "/ourCandles" },
    { label: "Sobre", path: "/about" },
    { label: "Contato", path: "/contact" },
  ];

  const DrawerList = () => (
    <Box sx={{ width: 250, display: "flex", flexDirection: "column", color: "black" }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <h3 style={{ margin: 0, fontSize: 22 }}>Menu</h3>
        <button
          onClick={toggleDrawer(false)}
          style={{ border: "none", background: "transparent", fontSize: "16px", cursor: "pointer" }}
        >
          ✖
        </button>
      </Box>
      <List>
        {menuItems.map(({ label, path }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton sx={{ width: "100%", justifyContent: "center" }}>
              <NavLink
                to={path}
                className={({ isActive }) => `w-full text-center ${isActive ? "text-black bg-slate-300" : "text-black"} hover:scale-105 transition ease-in-out`}
              >
                {label}
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      style={{ background, height }}
      className="fixed top-0 left-0 w-full flex items-center px-8 transition-all duration-300 z-1"
    >
      <Link to="/" className="w-full sm:w-auto text-center sm:text-left">
        <img src={assets.logo} className="h-12 w-12" alt="Logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-white absolute left-1/2 transform -translate-x-1/2">
        {menuItems.map(({ label, path }) => (
          <NavLink to={path} className="relative text-white transition duration-300 ease-in-out" key={label}>
            <p className="relative text-white">
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black hover:w-1/2 transition-all duration-300" style={{ transformOrigin: "left" }}></span>
            </p>
          </NavLink>
        ))}
      </ul>
      <BiMenuAltRight onClick={toggleDrawer(true)} className="w-16 h-10 pl-4 cursor-pointer text-white sm:hidden" />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <DrawerList />
      </Drawer>
    </motion.div>
  );
};

export default Navbar;
