import Head from "next/head"

export default function Home(): JSX.Element {
    return (
        <div className="container">
            <Head>
                <title>Index</title>
            </Head>
            <main>
                <h1>Change Me</h1>
                <p>Hello, world</p>
            </main>
        </div>
    )
}
