import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
    return (
        <MainLayout>
            <h1 className={classes.error}>Page not found</h1>
            <p>Please <Link href={"/"}><a className={classes.linkError}>go back</a></Link> to safety</p>
        </MainLayout>
    )
}