import logo from "./padaria.png"

function Header() {
    return (
        <>
        <header>
            <section> 
            <img src={logo} alt="" />
            </section>
                <nav>
                <ul>
                    <li>Cardápio</li>
                    <li>Encomendas</li>
                    <li>Contato</li>
                    <li>Unidades</li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Header