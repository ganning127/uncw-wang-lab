import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NavBar } from '../components/NavBar'
import { SwiperLanding } from '../components/Landings/SwiperLanding'

export default function Home() {
  return (
    <>
      <NavBar active='the wang lab' />
      <SwiperLanding />

    </>
  )
}
