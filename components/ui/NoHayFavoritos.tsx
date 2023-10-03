import { Image } from '@nextui-org/react'
import React from 'react'

const NoHayFavoritos = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }}>
        <h1 style={{fontSize: '30px'}}> No Hay Favoritos </h1>
        <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
            width={250}
            height={250}
            style={{
                opacity: 0.1
            }}
        />
    </div>
  )
}

export default NoHayFavoritos