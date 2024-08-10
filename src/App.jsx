import { Link } from "react-router-dom";
import useSWR from 'swr';
import { Github } from 'lucide-react';



const fetcher = url => fetch(url).then(reponse => reponse.json());

function App() {
  function Card({article}){

    return (
        <div className="carticledInfinitScroll">
            <img src={article.image} alt={article.title +"image"} width="70px"  height="80px"/>
            <div>
                <h3>{article.title}</h3>
            </div>
        </div>
    )
  }

  const {data , error} = useSWR("https://fakestoreapi.com/products?limit=5" , fetcher)
    if(error) {
        return(
            <div className="card error">
                <h4>Erreur lors de la recuperation de données !</h4>
            </div>
        )
    }

    if (!data) {
        return(
            <h1>Loading ....</h1>
        )
    }

  return (
    <>
      <header>
        <h2>Arnaque Shopp</h2>
        <div>
          <h3><Link to="about">A propos</Link><br /></h3>
          <h3><Link to="shopp">Boutique</Link></h3>
        </div>
      </header>

      
      <section>

           <>
            <h2>Bienvenue chez</h2>
            <h1>Arnaque Shopp</h1>
            <div>
              <h2>Voici un avant gout de nos article</h2>
            
              <div className='cardContainer'>
                {data.map((ar,i)=>{
                    return <Card key={i} article={ar} />
                })}
              </div>
            </div>
          </>

          <div>
          </div>
      </section>

      <footer>
        <a href="http://github.com/D4NIL122IQ" target="_blank" rel="noopener noreferrer"><Github/> BY Danil gdj</a>
      </footer>
    </>
  )
}

export default App
