import { Link } from "react-router-dom"
import { Github } from "lucide-react"
export default function Aboutus(){
    return (
        <>
            <header>
                <h2>Arnaque Shopp</h2>
                <div>
                    <h3><Link to="/TOP-Shopping/">Home</Link></h3>
                </div>
            </header>

            <section>
                <hr />
                <h1>Qui somme nous ?</h1>
                <p>Nous somme une boutique en ligne qui arnaque avec de faut produit </p>
                <p>et ceci est notre site web</p>
                <p>tout les produit sont faux</p>
                <p>notre arnaque est base au meme endroit que : <a href="http://d4nil122iq.github.io/TOP-Restauran/" target="_blank" rel="noopener noreferrer">Dawasushi</a></p>
                <hr />
            </section>

            <footer>
                <a href="http://github.com/D4NIL122IQ" target="_blank" rel="noopener noreferrer"><Github/> BY Danil gdj</a>
            </footer>
            
        </>
    )
}

