import React, { FC } from 'react'
import { Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import { Pokemon } from '@/interfaces';

interface Props{
    pokemon: Pokemon
}

const PokemonFullCard: FC<Props>  = ({ pokemon }) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{pokemon.id}</p>
        <small className="text-default-500">{pokemon.species.name}</small>
        <h4 className="font-bold text-large">{pokemon.name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={ pokemon.name }
          className="object-cover rounded-xl"
          src={ pokemon.sprites.other?.dream_world.front_default || '/no-hay-imagen-:('}          
          width={270}
        />
      </CardBody>
    </Card>
  )
}

export default PokemonFullCard