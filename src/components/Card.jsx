import React from 'react'

const Card = () => {
    const produtos = [
        {
            id: 1,
            nome: 'Camiseta do Arsenal',
            preco: 'R$ 89,90',
            imagem:
                'https://images.unsplash.com/photo-1577212017184-80cc0da11082?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        },
        {
            id: 2,
            nome: 'Camiseta do Chicago Bulls',
            preco: 'R$ 59,90',
            imagem:
                'https://dcdn-us.mitiendanube.com/stores/001/057/958/products/camiseta-de-time-chicago1-da5df1255d276ffdca16294724799519-480-0.webp',
        },
        {
            id: 3,
            nome: 'Camiseta da Loud',
            preco: 'R$ 74,90',
            imagem:
                'https://ae01.alicdn.com/kf/Se863fad0feb14b4e9a83d4f0210e2c88Z/Loud-Valorant-Team-Men-s-Summer-3D-Printed-Brazilian-E-Sport-T-shirts-Round-Neck-Short.jpg',
        },
    ]
  return (
    <div>
          {/* PRODUTOS */}
          <section className="mx-auto max-w-6xl px-6 pb-20">
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                      <span className="font-semibold text-orange-800 tracking-wider text-sm">
                          DESTAQUES
                      </span>

                      <h2 className="mt-1 text-3xl font-extrabold text-orange-600">
                          Mais vendidos ⭐
                      </h2>

                      <p className="mt-2 text-black">
                          Os favoritos de quem ama esporte!
                      </p>
                  </div>

                  <button className="self-start rounded-full border-2 border-black px-5 py-2 font-semibold text-black transition hover:bg-orange-600 hover:text-black sm:self-auto">
                      Ver todos →
                  </button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {produtos.map((produto) => (
                      <div
                          key={produto.id}
                          className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
                      >
                          {/* Imagem */}
                          <div className="relative overflow-hidden bg-slate-100">
                              <img
                                  src={produto.imagem}
                                  alt={produto.nome}
                                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                              />

                              <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
                                  OFERTA
                              </span>
                          </div>

                          {/* Conteúdo */}
                          <div className="p-5 flex flex-col flex-grow justify-between">
                              <div>
                                  <h3 className="min-h-[56px] text-lg font-bold text-slate-800">
                                      {produto.nome}
                                  </h3>

                                  <div className="mt-3 flex items-center gap-1 text-yellow-400 text-sm">
                                      ⭐⭐⭐⭐⭐
                                      <span className="ml-1 text-xs text-slate-400">
                                          (25)
                                      </span>
                                  </div>

                                  <div className="mt-3">
                                      <span className="text-sm text-slate-400 line-through">
                                          R$ 119,90
                                      </span>

                                      <p className="text-2xl font-extrabold text-orange-600">
                                          {produto.preco}
                                      </p>
                                  </div>
                              </div>

                              <button className="mt-5 w-full rounded-xl bg-orange-600 py-3 font-bold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg">
                                  🛒 Adicionar ao carrinho
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
          </section>
    </div>
  )
}

export default Card
