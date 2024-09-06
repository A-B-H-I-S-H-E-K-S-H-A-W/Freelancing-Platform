import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Ai from '../components/Ai'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Freelancer from '../components/Freelancer'
import Example from '../components/Eample'
import Video from '../components/Video'
import VideoCard from '../components/VideoCard'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Category/>
      <Ai/>
      <VideoCard/>
      <Example/>
      <Freelancer/>
      <Video/>
      <Footer/>
    </div>
  )
}
