import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link' // для того щоб динамічно загружати сторінки в роутінгу типу SPA
import { MainLayout } from '../components/MainLayout'

export default function Home() {
  return (
    <MainLayout title='Home Page'>
      <h1>NextJS HomePage</h1>
      <Link href="/about"><a>About</a></Link>
      <Link href={'/about'}><a>Posts</a></Link>
    </MainLayout>
  )
}
