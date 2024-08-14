import { Link } from "react-router-dom";
import useSWR from 'swr';
import { Github } from 'lucide-react';
import shoopingimg from './assets/shopping.jpg'


const fetcher = url => fetch(url).then(reponse => reponse.json());

function App() {
  
  function Card({article}){
    return (
        <div className="bg-zinc-200 border-2 border-fawn w-300px  p-1">
            <img src={article.image} alt={article.title +"image"} width="70px"  height="80px"/>
            <div>
                <h3>{article.title}</h3>
                <p>{article.price}DA</p>
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
          <div
          class="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl mt-48"
        >
          <div class="bg-[#333] flex items-center p-[5px] text-whitec relative">
            <div class="flex absolute left-3">
              <span class="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
              <span class="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
              <span class="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
            </div>
            <div class="flex-1 text-center text-white">status</div>
          </div>
          <div class="p-2.5 text-[#0f0]">
            <div>
              <span class="mr-2">Loading</span>
              <span class="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
              <span class="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
              <span class="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
            </div>
          </div>
        </div>
        
        )
    }

  return (
    <>
      <header className="bg-darkPurple text-white flex h-20vh justify-around items-center">
        <h2 className="text-4xl font-bold underline">Arnaque Shopp</h2>
        <div className="flex items-center gap-4">
          <h3 className=""><Link to="about">A propos</Link><br /></h3>
          <h3 className=""><Link to="shopp">Boutique</Link></h3>
        </div>
      </header>

      
      <section className="bg-frenchGray flex justify-around h-70vh">

           <div className="w-1/2"> 
              <div className="text-center m-4 text-4xl">
                <h2>Bienvenue chez</h2>
                <h1 className="underline">Arnaque Shopp</h1>
              </div>
              <div className="text-center">
                <h2 >Voici un avant gout de nos article</h2>
            
                <div className='flex w-full gap-2  animation-infinite-scroll'>
                  {data.map((ar,i)=>{
                    return <Card key={i} article={ar} />
                  })}
                </div>
              </div>
          </div>

          <div className="imageShop border-fawn border-2 w-1/2">
          </div>
      </section>

      <footer>
        <a href="http://github.com/D4NIL122IQ" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center mx-auto w-40 bottom-0 h-10vh"><Github/> BY Danil gdj</a>
      </footer>
    </>
  )
}

export default App
