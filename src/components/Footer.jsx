
function Footer() {
    return (
        <footer>
            <div>
                <h2>Loja Esportes</h2>
                <p>
                    Encontre os equipamentos certos para
                    superar seus limites.
                </p>
            </div>

            <div>
                <h3>Categorias</h3>
                <ul>
                    <li><a href="/produtos">Futebol</a></li>
                    <li><a href="/produtos">Corrida</a></li>
                    <li><a href="/produtos">Academia</a></li>
                </ul>
            </div>

            <div>
                <h3>Navegação</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/produtos">Nossos produtos</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
            </div>

            <div>
                <h3>Atendimento</h3>
                <ul>
                    <li><a href="/contato">Fale conosco</a></li>
                    <li><a href="/contato">Dúvidas e suporte</a></li>
                </ul>
            </div>

            <div>
                <p>
                    © {new Date().getFullYear()} Loja Esportes.
                    Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
