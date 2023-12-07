import React from 'react'
import AboutBanner from './component/AboutBanner'
import CoreValues from './component/CoreValues';
import Leadership from './component/Leadership';
import JourneyYear from './component/JourneyYear';
import Awards from './component/awards';
import AboutLava from './component/AboutLava';

export default function Index() {
  return (
    <>
      <AboutBanner />
      <CoreValues/>      
      <Leadership/>
      <AboutLava/>      
    <JourneyYear/>
    <Awards/>
    </>
  )
}
