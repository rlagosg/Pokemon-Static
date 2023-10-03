import React, { FC } from 'react'
import { Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { SmallPokemon } from '@/interfaces';
import { useRouter } from 'next/router';

interface Props{
    pokemon: SmallPokemon,
    index: number
}

const PokemonCard: FC<Props> = ({ pokemon, index }) => {

    const router = useRouter();
    const onClick = () => {
        router.push(`/name/${pokemon.name}`);
    };

  return (
    <Card shadow="sm" key={index} isPressable onPress={ onClick }>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="190"
              height={180}
              alt={pokemon.name}              
              src={pokemon.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{pokemon.name}</b>
            <p className="text-default-500"># {pokemon.id}</p>
          </CardFooter>
        </Card>
  )
}

export default PokemonCard