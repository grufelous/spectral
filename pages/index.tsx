import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Scroller } from '../components/common/Scroller';
import styles from '../styles/Home.module.css';

const Home: NextPage = (props) => {
  console.log("🚀 ~ file: index.tsx ~ line 7 ~ props", props)
  return (
    <Scroller />
  );
};

export default Home
