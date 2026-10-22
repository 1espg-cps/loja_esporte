import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-blue-700 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-8">
                {/* Identidade da loja */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <Link
                        to="/"
                        className="inline-block text-2xl font-extrabold tracking-tight transition-colors hover:text-orange-500"
                    >
                        Loja <span className="text-orange-500">Esportes</span>
                    </Link>

                    <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
                        Seu próximo desafio começa aqui.
                        Encontre os equipamentos certos para
                        superar seus limites.
                    </p>
                </div>

                {/* Categorias esportivas */}
                <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-orange-500">
                        Categorias
                    </h3>

                    <ul className="space-y-3 text-sm text-slate-300">
                        <li>
                            <Link
                                to="/produtos"
                                className="transition-colors hover:text-white"
                            >
                                Futebol
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/produtos"
                                className="transition-colors hover:text-white"
                            >
                                Corrida
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/produtos"
                                className="transition-colors hover:text-white"
                            >
                                Academia
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Navegação principal */}
                <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-orange-500">
                        Navegação
                    </h3>

                    <ul className="space-y-3 text-sm text-slate-300">
                        <li>
                            <Link to="/" className="transition-colors hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/produtos"
                                className="transition-colors hover:text-white"
                            >
                                Nossos produtos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contato"
                                className="transition-colors hover:text-white"
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Atendimento */}
                <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-orange-500">
                        Atendimento
                    </h3>

                    <ul className="space-y-3 text-sm text-slate-300">
                        <li>
                            <Link
                                to="/contato"
                                className="transition-colors hover:text-white"
                            >
                                Fale conosco
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contato"
                                className="transition-colors hover:text-white"
                            >
                                Dúvidas e suporte
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Rodapé inferior */}
            <div className="border-t bg-blue-700">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} Loja Esportes.
                        Todos os direitos reservados.
                    </p>

                    <Link
                        to="/"
                        className="text-xs font-semibold text-orange-500 transition-colors hover:text-orange-400"
                    >
                        Movimente-se. Supere-se.
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
