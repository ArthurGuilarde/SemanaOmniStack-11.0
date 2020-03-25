import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'
import './styles.css';
import logoImg from '../../assets/logo.svg'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [wpp, setWpp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    
    const history = useHistory();

    async function handleRegistre(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            wpp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
            
        } catch (err) {
            alert('Erro no candastro. Tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Ops!" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encotrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegistre}>
                    <input placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    ></input>
                    <input type="email" placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    ></input>
                    <input placeholder="WhatsApp"
                        value={wpp}
                        onChange={e => setWpp(e.target.value)}
                    ></input>

                    <div className="input-group">
                        <input placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        ></input>
                        <input placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        ></input>
                    </div>

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}