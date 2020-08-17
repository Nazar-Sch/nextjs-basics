import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import { MainLayout } from '../../components/MainLayout'
import Link from 'next/link'
import { NextPageContext } from 'next'
import { MyPost } from '../../interfaces/posts'

interface PagePostProps {
    post: MyPost
}

export default function Post({ post: serverPost }: PagePostProps) {
    const router = useRouter()
    const routerId = router.query.id
    const [post, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const res = await fetch(`http://localhost:4200/posts/${routerId}`);
            const data = await res.json()
            setPost(data)
        }
        if (!serverPost) {
            load()
        }
    }, [])
    if (!post) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }
    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <hr /> 
            <p>{post.body}</p>
            <Link href={`/posts`}><a>Go back to Posts List</a></Link>
        </MainLayout>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
    if (!req) {
        return {
            post: null
        }
    }
    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post: MyPost = await response.json()
    return {
        post
    }
}  