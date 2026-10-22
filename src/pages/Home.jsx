import { Link } from "react-router-dom";
import Card from "../components/Card";


const Home = () => {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-blue-700 px-6 py-20 text-center text-white">
                <h1 className="text-4xl font-bold md:text-6xl">Loja de Esportes</h1>
                <p className="mt-4 text-lg md:text-xl">
                    Tudo para você treinar e competir.
                </p>
                <Link
                    to="/produtos"
                    className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-gray-200"
                >
                    Ver produtos
                </Link>
            </section>
            <Card/>
        </main>
    );
}

export default Home