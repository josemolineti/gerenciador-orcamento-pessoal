import { useNavigate } from 'react-router-dom'; 
import '../styles/index.css';
import '../styles/login.css';

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    };

    return (
        <div id='main-div'>
            <h1>Login</h1>
            <div>
                <h2>Email</h2>
                <input type="text" placeholder='Digite seu Email' required/>
            </div>
            <div>
                <h2>Senha</h2>
                <input type="password" placeholder='Digite sua Senha' required/>
            </div>
            <button onClick={handleLogin}>LOGIN</button> 
            <p>OBS: Caso as páginas não abram (Erro 404), abra o link novamente em uma Guia Anônima!</p>
        </div>
    );
}

export default Login;
