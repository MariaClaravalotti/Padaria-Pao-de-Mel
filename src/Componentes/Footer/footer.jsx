import React , {useState} from "react"

function Footer(){
    function Mensagem (){
        setTimeout(()=>{
            alert("Parabens voce ganhou uma trufa!")
        },4000)
    }
    const [numero,setNumero]=useState(0)

     const Add =()=>{
        setTimeout(()=> {
            setNumero(numero+1)
        },2000)
     }
     const Menos=()=>{
        setTimeout(()=>{
            setNumero(numero-1)
        },2000)
     }


     const [valor , setValor]=useState(0)
     const[Parando,setParando]= useState()

     const Iniciar = () =>{
        
        const guardarIntervalo = setInterval(() => {
            setValor((valor)=> valor +1 )
        },1000)

        setParando(guardarIntervalo)
     }
     
     const PararContagem = () => clearInterval(Parando)


    return(
<footer>
<section>
    <h3>Mensagem do setTimeout</h3>
    <button onClick={Mensagem}>Mensagem</button>
</section>

<section>
    <h3>Contador com setTimeout</h3>
    <h3>{numero}</h3>
    <button onClick={Add}>+</button>
    <button onClick={Menos}>-</button>
</section>
<section>
    <h2>Cronêmetro</h2>
    <h3>{valor}</h3>
    <button onClick={Iniciar}>Iniciar</button>
    <button onClick={PararContagem}>Parar</button>
</section>
</footer>
    )
}
export default Footer 