import { Link } from "react-router-dom";
import { ShoppingBasket } from 'lucide-react';
import Card from "./components/recupProduit";
import Cart from "./components/cart";
import { useState } from "react";
import useSWR from "swr";
import { Github } from "lucide-react";

const fetcher = url => fetch(url).then(reponse => reponse.json());

export default function Shopp(){

    const [URL , setURL] = useState('https://fakestoreapi.com/products')
    const [whoChecked , setChecked] = useState("all")
    const [displayCart , setDisplatCart] = useState(false)
    const [nbrproduit , setnbrproduit] = useState(0)
    const [contenuCart , setContenuCart] = useState([])
    const {data , error} =useSWR(URL , fetcher)

    const handleChangeURL = (categorie)=>{
        const newURL = "https://fakestoreapi.com/products/category/" + categorie
        setURL(newURL)
    }
    
    const handleChangeChecked = (id)=>{
        setChecked(id)
    }

    const handleDisplayCart = ()=>{
        setDisplatCart(true)
    }
    const handleCacherCart = ()=>{
        setDisplatCart(false)
    }
    if(error){
        return(
            <>
                <h1 >ERREUR, impossible d'acceder aux donnees </h1>
            </>
        )
    }

    if(!data){
        return(
            <>
                <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
 	                <span className='sr-only'>Loading...</span>
  	                <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	                <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	                <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
                </div>
            </>
        )
    }   

    return (
        <>
            <header className="bg-darkPurple text-white flex h-20vh justify-around items-center">
                <h2 className="text-3xl font-bold underline">Arnaque Shopp</h2>
                <div className="flex gap-8 items-center">
                    <h3><Link to="/TOP-Shopping/">Home</Link></h3>
                    <h3 className="border-white border flex gap-1 p-2 cursor-pointer" 
                        onClick={handleDisplayCart}>{nbrproduit}<ShoppingBasket/></h3>
                </div>
            </header>
                <section className="flex p-2 gap-1">
                    <aside className="border-r-1 w-1/5 m-10 border-r-2 border-stone-950">
                        <form className="flex-col">
                            <div>
                                <input type="checkbox" name="categorie" id="all" 
                                    onChange={()=>{handleChangeChecked('all'); setURL("https://fakestoreapi.com/products")}}
                                    checked={whoChecked === 'all'}/>
                                <label htmlFor="all">Tout les produit</label>
                            </div>
                            
                            <div>
                                <input type="checkbox" name="categorie" id="menClothing" 
                                    onChange={()=>{handleChangeChecked('menClocthing'); handleChangeURL("men's%20clothing")}}
                                    ckecked={whoChecked === 'menClothing'}/>
                                <label htmlFor="menClothing">Habile homme</label>
                            </div>
 
                            <div>
                                <input type="checkbox" name="categorie" id="womenClothing" 
                                    onChange={()=>{handleChangeChecked('womenClothing'); handleChangeURL("women's%20clothing")}}
                                    checked={whoChecked === 'womenClothing'}/>
                                <label htmlFor="womenClothing">Habile femme</label>
                            </div>

                            <div>
                                <input type="checkbox" name="categorie" id="electronics" 
                                    onChange={()=>{handleChangeChecked('electronics'); handleChangeURL("electronics")}}
                                    checked={whoChecked === 'electronics'}/>
                                <label htmlFor="jewelery">Electronique</label>
                            </div>

                            <div>
                                <input type="checkbox" name="categorie" id="jewelery" 
                                    onChange={()=>{handleChangeChecked('jawelery'); handleChangeURL("jewelery")}} 
                                    checked={whoChecked === 'jewelery'}/>
                                <label htmlFor="jewelery">Bijoux</label>
                            </div>
                        </form>
                    </aside> 

                    <article className="flex flex-wrap gap-5 w-3/4">

                            {data.map((article,i)=>{
                                return <Card article={article} key={i} addContenueIntoCart={setContenuCart} addNbrProduit={setnbrproduit}/>
                            })}

                    </article>
                    
                        {displayCart && <Cart allArticle={contenuCart}/>}

                </section>

                <footer>
                    <a href="http://github.com/D4NIL122IQ" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center mx-auto w-40 bottom-0 h-10vh"><Github/> BY Danil gdj</a>
                </footer>

        </>
    )
}