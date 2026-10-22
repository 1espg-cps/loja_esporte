import { Link } from "react-router-dom";

const destaques = [
    { id: 1, nome: "Tênis de Corrida", preco: "R$ 299,90" },
    { id: 2, nome: "Bola de Futebol", preco: "R$ 129,90" },
    { id: 3, nome: "Camisa Esportiva", preco: "R$ 89,90" },
];

const Home = () => {
    return (
        <main>
            <section>
                <h1>Loja de Esportes</h1>
                <p>Tudo para você treinar e competir.</p>
                <Link to="/produtos">Ver produtos</Link>
            </section>

            <section>
                <h2>Destaques</h2>
                <div>
                    {destaques.map((item) => (
                        <div key={item.id}>
                            <h3>{item.nome}</h3>
                            <p>{item.preco}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home