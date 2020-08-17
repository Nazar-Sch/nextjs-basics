import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = 'Base course' }) {
    return (
        <>
            <Head>
                <title>NextJS | {title}</title>
                <meta charSet="utf-8" />
                <meta name="keywords" content="nextjs,javascript,react" />
                <meta name="description" content="This is tutorial for NextJS" />
            </Head>
            <nav>
                <Link href="/"><a className="link">Home</a></Link>
                <Link href="/about"><a className="link">About</a></Link>
                <Link href="/posts"><a className="link">Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx global>{`
                nav {
                    position: fixed;
                    left: 0;
                    right: 0;
                    top: 0;
                    background: darkblue;
                    height: 50px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                .link {
                    color: white;
                }
                main {
                    margin-top: 70px;
                    padding: 1rem;
                }
            `}</style>
        </>
    )
}