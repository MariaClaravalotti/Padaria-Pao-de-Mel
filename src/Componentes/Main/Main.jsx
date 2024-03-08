import React, {useState} from "react"
import paocomovo from "./Card/paocomovo.jpg"
import misto from "./Card/misto.jpg"
import cafe from "./Card/cafe.jpg"
import paodequeijo from "./Card/paodequeijo.jpg"
function Main (){
    const [numero, setNumero] = useState(0) 
    const [numero2, setNumero2] = useState(0)
    
    const Adicionar =()=>{
        if (numero < 10)
        setNumero(numero+1)
    }
    const Remover =()=>{
        if(numero>0)
        setNumero(numero-1)
    }
    const Limpar =()=>{
        setNumero(0)
    }
    const Adicionar2 = () => {
        if (numero2 < 10) {
            setNumero2(numero2 + 1)
        }
    }
    
    function Remover2(){
        if(numero2 > 0){
            setNumero2(numero2 - 1)
        }
    }
    
    const Limpar2 = ()=> {
        setNumero2(0)
    }

return ( 
        <main>
         <div className="card" > 
         <img  src={paocomovo} alt="pao com ovo" />
         <h2>4,50</h2>
         <button onClick={Adicionar}>Adicionar</button>
         <button onClick={Remover}>Remover</button>
         <img onClick={Limpar} class="lixo" src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
         <h2>{numero}</h2>
         

         </div>
         <div className="card">
                <img src={misto} alt="misto quente " />
                <h2>5,00</h2>
                <button onClick={Adicionar2}>Adicionar</button>
                <button onClick={Remover2}>Remover</button>
                <img onClick={Limpar2} class="lixo" src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
                <h2>{numero2}</h2>
               
                
         </div>
         <div className="card">
             <img src={cafe} alt="cafezinho" />
             <h2>2,50</h2>
             <button>Adicionar</button>
             <button>Remover</button>
             <img class="lixo" src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
         </div>

         <div className="card">
            <img src={paodequeijo} alt="mineirinho demais uai" />
            <h2>3,50</h2>
            <button>Adicionar</button>
            <button>Remover</button>
            <img class="lixo" src="https://cdn-icons-png.flaticon.com/512/54/54324.png" alt="" />
         </div>

                
               
            
        </main>
    )
}
 
export default Main