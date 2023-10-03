import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC} from 'react'

interface Props{
    pokeID: number
}

export const FavoriteCard: FC<Props> = ({ pokeID }) => {

    const router = useRouter();

    const onClick = ()=>{
        router.push(`/pokemon/${pokeID}`);
    };

  return (
    <Card shadow="sm" key={pokeID} isPressable onPress={ onClick }>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="190"
              height={180}
              alt={`pokemon - ${pokeID}`}              
              src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg`}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            {/* <b>{pokemon.name}</b> */}
            {/* <p className="text-default-500"># {pokemon.id}</p> */}
          </CardFooter>
    </Card>
  )
}
