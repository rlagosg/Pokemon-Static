import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import FavoritePokemons from '@/components/pokemon/FavoritePokemons';
import PokemonCard from '@/components/pokemon/PokemonCard';
import NoHayFavoritos from '@/components/ui/NoHayFavoritos';
import { localFavorites } from '@/utils';
import { NextPage } from 'next'
import React from 'react'



const FavoritesPage: NextPage = () => {

  const Favoritos = localFavorites.getFavorires();

  return (
    <Layout title='Favoritos'>

      <div className="flex w-full flex-wrap md:flex-nowrap gap-4" style={{ justifyItems: 'center'}}>
        {
          Favoritos.length === 0 
            ? ( <NoHayFavoritos />) 
            : ( <FavoritePokemons Favoritos={ Favoritos }/>)
        }

      </div>
    </Layout>
  )
}



export default FavoritesPage;