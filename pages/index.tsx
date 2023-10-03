import { Inter } from 'next/font/google'
import { Layout } from '@/components/layouts';
import { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import PokemonCard from '@/components/pokemon/PokemonCard';



const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemons: SmallPokemon[],
  
}

const Home: NextPage<Props> = ({pokemons}) => {   
  
  return (

    <Layout title='Pokemon App'>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4" style={{ justifyItems: 'center'}}>
      {pokemons.map(( poke, i) => (
        <PokemonCard key={poke.id} index={ i } pokemon={poke}/>
      ))}
    </div>
    </Layout>
    
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');  

  const pokemons: SmallPokemon[] = data.results.map( (p, i) => 
     ({
        ...p,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
     })
  )

  return {
    props: {
      pokemons
    }
  }
}

export default Home;
