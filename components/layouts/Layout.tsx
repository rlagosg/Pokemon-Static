
import Head from 'next/head'
import React, { FC } from 'react'
import { NavBar } from '../ui'
import { useRouter } from 'next/router'

interface Props {
    children: React.ReactNode,
    title?: string
}

const origin = ( typeof window === 'undefined') ? '' : window.location.origin;

export const Layout:FC<Props> = ({children, title}) => {

  const router = useRouter();

  return (
    <>
        <Head>
            <title> { title || 'Pokemon App'}</title>
            <meta name='author' content='Ricardo Lagos' />
            <meta name='descripcion' content={`Informacion sobre el pokemon: ${ title } `} />
            <meta name='Keywords' content={`${ title}, pokemon, pokedex`} />

            {/* meta tags */}
            <meta property="og:title" content={`Informacion sobre ${ title }`}/>
            <meta property="og:description" content={`Esta es la pagina de informacion del pokemon ${ title }`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />

        </Head>

        {/* Appbar */}
        <NavBar />

        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
