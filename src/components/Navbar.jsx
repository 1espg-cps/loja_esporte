
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav>
                {/* Logo */}
                <Link to="/">
                    Loja <span>Esportes</span>
                </Link>

                {/* Navegação */}
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/produtos">Nossos produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato">Contato</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
