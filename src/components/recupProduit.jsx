import { useEffect, useState } from "react"

export default function Card({article ,  addContenueIntoCart, addNbrProduit}){
    const [quant , setQuant] = useState(1)
    const [displayqunt , setDisplayQuant] = useState('hidden')
    const [displayAcheter , setDisplayAcheter] = useState('block')

    const handleSubQuant =()=>{
        if(quant == 1){
            setQuant(1)
            handleCacherQuant()
            handleAfficherAcheter()
        }else{
            setQuant(quant => quant - 1)
            
        }
        addNbrProduit(quant => quant - 1)
    }

    const handleAddQuant = ()=>{
        setQuant(quant=> quant + 1)
        addNbrProduit(quant => quant + 1)
    }
    const handleAfficherAcheter = ()=>{
        setDisplayAcheter('block')
    }
    const handleCacheAcheter = ()=>{
        setDisplayAcheter('hidden')
    }

    const handleAfficherQuant = ()=>{
        setDisplayQuant('block')
    }
    const handleCacherQuant = ()=>{
        setDisplayQuant('hidden')
    }

    const handleAddnbrProduit = ()=>{
        addNbrProduit(nbractu => nbractu + 1 )
    }

    const handleAddIntoCart = ()=>{
        quant == 0 ? addContenueIntoCart(contenuactu => [...contenuactu , {ar: article , quantite: 1}]) : addContenueIntoCart(contenuactu => [...contenuactu , {ar: article , quantite: quant}])
        
    }

    useEffect(()=>{
        
    }, [quant])

    return (
        <div className='flex flex-col gap-2  w-52  h-72 border justify-center items-center p-4'>
            <img src={article.image} alt={article.title +"image"} width="70px"  height="80px"/>
            <div>
                <h3>{article.title}</h3>
                <p className="">{article.price}DA</p>
            </div>
            <hr />
            <div>
                <div className={"flex gap-2 " + displayqunt}>
                    <button onClick={()=>{
                        handleSubQuant();
                    }}>-</button>
                    <p className="border-3 border-red-500">{quant}</p>
                    <button onClick={()=>{
                        handleAddQuant();
                        }}>+</button>
                </div>
                <button onClick={()=>{
                    handleAddnbrProduit();
                    handleCacheAcheter();
                    handleAfficherQuant();
                }} className={ displayAcheter +" border-2 p-2 border-l-cyan-900"}>Ajouter au panier</button>
            </div>
        </div>
    )
}