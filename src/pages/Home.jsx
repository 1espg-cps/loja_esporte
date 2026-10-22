import { Link } from "react-router-dom";

const destaques = [
    { id: 1, nome: "Tênis de Corrida", preco: "R$ 299,90" },
    { id: 2, nome: "Bola de Futebol", preco: "R$ 129,90" },
    { id: 3, nome: "Camisa Esportiva", preco: "R$ 89,90" },
];

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

            <section className="mx-auto max-w-6xl px-6 py-12">
                <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:text-3xl">
                    Destaques
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {destaques.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">
                                {item.nome}
                            </h3>
                            <p className="mt-2 font-bold text-blue-700">{item.preco}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home