import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";

import GetTutor from "./getTutor";

import Home from "./home";
import NavigationBar from "../components/navigationBar";
import Footer from "../components/Footer";

export default function App() {
  return (
    <>
      <Script src="//code.tidio.co/3a74dxsf2ock0q9wm1vp3lzizh9rwnpr.js" async />
      <Home />
      {/* <NavigationBar/> */}
      {/* <Footer/> */}
      {/* <GetTutor/> */}
    </>
  );
}
