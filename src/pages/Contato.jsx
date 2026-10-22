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

    const inputStyle =
        "w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200";

 return (
        <main className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow">
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Contato
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label htmlFor="nome" className="font-medium text-gray-700">
                        Nome
                    </label>
                    <input
                        id="nome"
                        name="nome"
                        type="text"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                    />

                    <label htmlFor="email" className="font-medium text-gray-700">
                        E-mail
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                    />

                    <label htmlFor="mensagem" className="font-medium text-gray-700">
                        Mensagem
                    </label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                        value={form.mensagem}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                    />

                    <button
                        type="submit"
                        className="mt-2 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </main>
    );
}


export default Contato
