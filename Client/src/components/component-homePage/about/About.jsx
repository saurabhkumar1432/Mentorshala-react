import React, { useEffect } from 'react'
import { useState } from 'react'
import data from '../data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import './about.css'

const About= () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0
        }
        return index;
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index,people])
  return (
      <section id='about' className='Aboutcontainer'>
        <div className="title">
          <h2>About Us</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, name,title,image,quote } = person;
            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide'
            }
            if (position === index - 1 || (index === 0 && personIndex === people.length - 1)) {
              position = 'lastSlide'
            }
            return (
              <article className={position} key={id}>
                <div className='article-Div'><img src={image} alt='avatar' className='person-img' /></div>
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <p className='text'>{quote}</p>
                <span className='icon'>
                  <FaQuoteRight />
                </span>
              </article>
            )
          })}
          <div className="button-container">
            <button className="prev-btn" onClick={prevSlide}><FaChevronLeft /></button>
            <button className="next-btn" onClick={nextSlide}><FaChevronRight /></button>
          </div>
        </div>
    </section>
  )
}
export default About