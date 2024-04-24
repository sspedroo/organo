import "./Rodape.css"

const Rodape = () => {
    return(
        <footer className="footer">
            <div className="redes-sociais">
                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="imagens/fb.png" alt="Facebook Logo" />
                </a>
                <a href="http://x.com" target="_blank" rel="noopener noreferrer">
                    <img src="imagens/tw.png" alt="Twitter Logo" />
                </a>
                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="imagens/ig.png" alt="Instagram Logo" />
                </a>
            </div>
            <div>
                <img src="imagens/logo.png" alt="Organo logo" />
            </div>
            <div className="texto">
                <h3>Desenvolvido por Alura.</h3>
            </div>
        </footer>
    )
}

export default Rodape