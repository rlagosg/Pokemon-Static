import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import PokemonFullCard from '@/components/pokemon/PokemonFullCard';
import { Pokemon, PokemonListResponse, SmallPokemon } from '@/interfaces';
import { getPokemonInfo, localFavorites } from '@/utils';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react'

interface Props{
    pokemon: Pokemon
}   

const PokemonByNamePage:NextPage<Props>  = ({ pokemon }) => {

    const [inFavorites, setInFavorites] = useState( localFavorites.existInFavorites( pokemon.id));

    const onToggleFavorite = () => {
        localFavorites.toogleFavorite(pokemon.id);
        setInFavorites(!inFavorites);
  
        if( !inFavorites){
          confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 160,
            angle: -100,
            origin: { y: 0, x: 1 }
          });
        }
    }

    return (
        <Layout title={pokemon.name}>
            {/* <h1> {pokemon.id} - {pokemon.name} </h1> */}
          
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4" style={{ justifyItems: 'center'}}>
            <PokemonFullCard pokemon={pokemon}/>
    
            <Card className="py-4" style={{width: '800px'}}>
                <CardHeader style={{ display: 'flex', justifyContent: 'space-between'}}>
                  <h1 style={{ fontSize: '30px', flex: 1 }}>{pokemon.name}</h1>
    
    
                  <Button 
                    color='warning' 
                    variant={inFavorites ? "ghost" : "bordered"}
                    onClick={onToggleFavorite}
                  >
                    {inFavorites ? 'En Favoritos' : 'Guardar en favoritos'}
                  </Button>
    
    
                </CardHeader>
                <CardBody>
                <h1 style={{ fontSize: '20px', flex: 1 }}>Sprites</h1>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4" style={{ justifyItems: 'center'}}>
                <Image
                  alt={ pokemon.name }
                  className="object-cover rounded-xl"
                  src={ pokemon.sprites.front_default || '/no-hay-imagen-:('}          
                  width={270}
                />
                <Image
                  alt={ pokemon.name }
                  className="object-cover rounded-xl"
                  src={ pokemon.sprites.back_default || '/no-hay-imagen-:('}          
                  width={270}
                />
                <Image
                  alt={ pokemon.name }
                  className="object-cover rounded-xl"
                  src={ pokemon.sprites.front_shiny || '/no-hay-imagen-:('}          
                  width={270}
                />
                <Image
                  alt={ pokemon.name }
                  className="object-cover rounded-xl"
                  src={ pokemon.sprites.back_shiny || '/no-hay-imagen-:('}          
                  width={270}
                />
                </div>
                </CardBody>
    
            </Card>
          </div>    
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');  
    const pokemons151: SmallPokemon[] = data.results;
  
    return {  
      paths: pokemons151.map( (p) => (
        {
          params: {
            name: p.name
          }
        }
      )),
  
      fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
    const { name } = params as { name: string};

    const pokemon = await getPokemonInfo( name )
    
    if ( !pokemon ){
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
    }
    
    return {
        props: {
            pokemon
        },
        revalidate: 86400
    }
  }

export default PokemonByNamePage;