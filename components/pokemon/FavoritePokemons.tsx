import React, { FC} from 'react'
import { FavoriteCard } from '.'

interface Props{
    Favoritos: number[]
}

const FavoritePokemons:FC<Props> = ({Favoritos}) => {
   
  return Favoritos.map( (pokemon) => (
    <FavoriteCard pokeID={pokemon}/>
  ))
  
}

export default FavoritePokemons