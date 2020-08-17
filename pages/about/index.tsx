import Router from 'next/router'
import { MainLayout } from '../../components/MainLayout'
import { MyPost } from '../../interfaces/posts'
import { NextPageContext } from 'next'

interface PageAboutProps {
    title, body: MyPost
}

export default function About({ title, body }: PageAboutProps) {
    const linkCLickHome = () => {
        Router.push('/')
    }
    return (
    <MainLayout title='About Page'>
        <h1>{title}</h1>
        <hr />
        <p>{body}</p>
        <button onClick={linkCLickHome}>Go back to home</button>
        <button onClick={() => Router.push('/posts')}>Go to posts</button>
    </MainLayout>
    )
}

About.getInitialProps = async ({ req }: NextPageContext) => {
    const res = await fetch('http://localhost:4200/about')
    const data = await res.json()
    return {
        title: data.title,
        body: data.body
    }
}