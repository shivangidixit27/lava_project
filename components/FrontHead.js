import React from 'react'
import Head from 'next/head'
export default function FrontHead({title}) {
  return (
    <>
        <Head>
                <title>{title}</title>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                {/* <link rel="icon" href="/fav_icon.png" /> */}
            </Head>
    </>
  )
}
