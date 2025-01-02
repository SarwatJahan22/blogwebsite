import React from 'react'
import AuthorCard from '@/components/AuthorCard'
import Navbar from '@/components/Navbar'
import Mega from '@/components/Mega'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Feature/>
      <Mega/>
      <AuthorCard/>
      <Footer/>
    </div>
  )
}

export default Home