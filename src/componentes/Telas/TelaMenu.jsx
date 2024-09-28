import Pagina from "../layouts/Pagina";

export default function TelaMenu(props) {
    const estiloCentralizado = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' // Ajuste conforme necessário
    };

    return (
        <div>
            <Pagina />
            <div style={estiloCentralizado}>
                <img 
                    src="https://tm.ibxk.com.br/2024/02/27/27184211661338.jpg?ims=1200x675" 
                    alt="imagem falha" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />
            </div>
        </div>
    );
}
