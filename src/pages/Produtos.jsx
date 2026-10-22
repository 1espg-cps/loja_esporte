import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Produtos = () => {

    const categorias = [
        {
            nome: 'Futebol',
            emoji: '⚽',
            cor: 'from-green-100 to-green-200',
            desc: 'Corinthians, Palmeiras, Arsenal e etc...',
            hover: 'hover:border-green-400',
        },
        {
            nome: 'Basquete',
            emoji: '🏀',
            cor: 'from-orange-100 to-orange-200',
            desc: 'Chicago Bulls, Lakers, Golden State e etc...',
            hover: 'hover:border-orange-400',
        },
        {
            nome: 'E-Sports',
            emoji: '🎮',
            cor: 'from-red-100 to-red-200',
            desc: 'Loud, Pain Gaming, Red Canids e etc...',
            hover: 'hover:border-red-400',
        },
    ]

    return (
        <main className="min-h-screen bg-orange-100 font-sans antialiased">

            {/* CATEGORIAS */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="mb-10 text-center">
                    <span className="font-bold text-orange-800 tracking-wider text-sm">
                        CATEGORIAS
                    </span>

                    <h2 className="mt-2 text-3xl font-extrabold text-orange-600 md:text-4xl">
                        Encontre sua vestimenta favorita! 👕
                    </h2>

                    <p className="mt-3 text-black">
                        Escolha uma categoria e comece a diversão!
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                    {categorias.map((categoria) => (
                        <div
                            key={categoria.nome}
                            className={`group cursor-pointer rounded-3xl border-2 border-transparent bg-gradient-to-br ${categoria.cor} p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${categoria.hover}`}
                        >
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-5xl shadow-md transition duration-300 group-hover:scale-110">
                                {categoria.emoji}
                            </div>

                            <h3 className="mt-4 text-lg font-bold text-slate-800">
                                {categoria.nome}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500 font-medium">
                                {categoria.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <Card/>
        </main>
    )
}

export default Produtos