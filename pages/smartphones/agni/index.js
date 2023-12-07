import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { $ } from 'react-jquery-plugin';
import Head from '@/components/FrontHead';
import ProductList from '@/components/ProductCommon/ProductList';
import ProductBanner from '@/components/ProductCommon/ProductBanner';
import ProductHeader from '@/components/ProductCommon/ProductHeader';

export default function Index() {
    useEffect(() => {

        if (typeof window !== "undefined") {

            document.body.classList.add('no-banner');
        }

        return () => {
            if (typeof window !== "undefined") {

                document.body.classList.remove('no-banner');
            }
        }
    }, [])

    return (
        <>
        <Head title = "agni"/>
            <ProductHeader/>
            <ProductBanner/>
            <ProductList/>
        </>
    )
}
