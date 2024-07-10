import React from 'react'
import Articlecard from '../../../components/Articlecard'
const Articles = () => {
  return (
    <section className='container mx-auto flex flex-wrap md:gap-x-5  gap-y-5 px-5 py-10'>
      <Articlecard className="w-full md:w-[calc(50%-20px)]"/>
      <Articlecard className="w-full md:w-[calc(50%-20px)]"/>
     
    </section>
  )
}

export default Articles
