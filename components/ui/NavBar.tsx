import { Link, Spacer, Textarea } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import Image from 'next/image';
import LinkNext from 'next/link';
import React, { useContext } from 'react'


export const NavBar = () => {

    const { theme } = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: '#333', 
        color: '#fff' ,         
    }}>

        <LinkNext href={'/'} passHref legacyBehavior>  
            <Link>    
              <Image
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                  alt='iconApp'
                  width={70}
                  height={70}
                  />
                <h1 style={{ color: 'white', fontSize: '26px' }}>P</h1>
                <h3 style={{ color: 'white', fontSize: '20px' }}>okemon</h3>
              </Link>  
        </LinkNext>


        <Spacer style={{flex: '1'}}/>
         


        <LinkNext href="/favorites" passHref legacyBehavior>
          <Link>
            <p style={{color: 'white'}}>Favoritos</p>             
          </Link>
        </LinkNext>
        

    </div>
  )
}
