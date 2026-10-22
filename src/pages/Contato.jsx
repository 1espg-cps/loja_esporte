import { useState } from "react";

const Contato = () => {
    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Obrigado, ${form.nome}! Mensagem enviada.`);
        setForm({ nome: "", email: "", mensagem: "" });
    }

 return (
        <main>
            <h1>Contato</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    name="nome"
                    type="text"
                    value={form.nome}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="5"
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Enviar</button>
            </form>
        </main>
    );
}


export default Contato
