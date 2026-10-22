
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const linkClass = ({ isActive }) =>
        `text-sm font-semibold transition-colors duration-200 ${isActive
            ? "text-orange-500"
            : "text-white hover:text-orange-400"
        }`;

    return (
        <header className="sticky top-0 z-50 bg-slate-950 shadow-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-extrabold tracking-tight text-white sm:text-2xl"
                >
                    Loja <span className="text-orange-500">Esportes</span>
                </Link>

                {/* Navegação */}
                <ul className="flex items-center gap-4 sm:gap-8">
                    <li>
                        <NavLink to="/" end className={linkClass}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/produtos" className={linkClass}>
                            <span className="sm:hidden">Produtos</span>
                            <span className="hidden sm:inline">Nossos produtos</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contato" className={linkClass}>
                            Contato
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
