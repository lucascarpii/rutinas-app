import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        // Aquí puedes agregar tu lógica para conectar a la base de datos
        console.log(`Iniciando sesión con el email: ${email}`);
    };

    return (
      <form onSubmit={handleLogin}>
          <h1>Login</h1>
            <label>
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Contraseña:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Iniciar sesión" />
        </form>
    );
}

export { Login };
