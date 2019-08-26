import React, { useEffect, useState } from 'react'

import Header from './components/Layout/Header'
import Search from './components/Layout/Search'
import Categories from './components/Layout/Categories'
import Carousel from './components/Carousel'
import CarouselItem from './components/CarouselItem'
import Footer from './components/Layout/Footer'

import useInitialState from './hooks/useInitialState'

import './assets/scss/styes.scss'

const API = `http://localhost:3001/initialState`

const App = () => {

  const initialState = useInitialState(API)
  console.log(initialState)

  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <React.Fragment>
      
      <Header />

      <Search />

      {initialState.mylist.length && 
        (
          <Categories title="Mi lista">
            <Carousel>
            {initialState.mylist.map(item =>
            <CarouselItem key={ item.id } { ...item } />
          )}
            </Carousel>
          </Categories>
        )
      }
      
      {initialState.trends.length && 
        (
          <Categories title="Tendencia">
            <Carousel>
              {initialState.trends.map(item =>
                <CarouselItem key={ item.id } { ...item } />
              )}
            </Carousel>
          </Categories>
        )
      }

      {initialState.originals.length && 
        (
          <Categories title="Originales de PlatziVideo">
            <Carousel>
              {initialState.originals.map(item =>
                <CarouselItem key={ item.id } { ...item } />
              )}
            </Carousel>
          </Categories>
        )
      }
  
      <Footer />

    </React.Fragment>
  )
}

export default App