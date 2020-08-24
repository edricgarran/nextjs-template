import Head from "next/head"

export default function Home(): JSX.Element {
    return (
        <div className="container">
            <Head>
                <title>Index</title>
            </Head>
            <main>
                <img width="100" height="100" src={require("../assets/image.svg")} />
                <h1>Change Me</h1>
                <p>Hello, world</p>
            </main>
        </div>
    )
}
