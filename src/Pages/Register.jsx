import { useState } from 'react';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        // Aquí puedes agregar tu lógica para conectar a la base de datos
        console.log(`Registrando al usuario: ${firstName} ${lastName}`);
    };

    return (
        <form onSubmit={handleRegister}>
            <label>
                Nombre:
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </label>
            <label>
                Apellido:
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Contraseña:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Registrarse" />
        </form>
    );
}

export { Register };
