import React from 'react'
import { Hero } from '../component/hero/Hero'
import { NewCollections } from '../component/newcollections/NewCollections'
import { NewsLetter } from '../component/newsletter/NewsLetter'
import { Offers } from '../component/offers/Offers'
import { Popular } from '../component/popular/Popular'

export const Home = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
