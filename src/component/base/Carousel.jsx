import React, { useState } from 'react'
import left from '../../assets/arrowl.png'
import right from '../../assets/arrowr.png'
import c1 from '../../assets/crs1.jpg'
import c2 from '../../assets/crs2.jpg'
import c3 from '../../assets/crs3.jpg'
import c4 from '../../assets/crs4.jpg'

const Carousel = ({ className }) => {

    let [show, setShow] = useState(1)
    const handleNext = () => {
        setShow((current)=>current+1)
        if(show === 4 ){
            setShow(1)
        }
    }
    const handlePrev = () => {
        setShow((current)=>current-1)
        if(show === 1 ){
            setShow(4)
        }
    }

  return (
    <div className={className}>
        <div className="container mx-auto flex">
            <button onClick={handlePrev} className='h-max w-max my-auto ml-auto'><img className='w-3/4 h-3/4 hover:opacity-70 ml-auto md:w-full md:h-full' src={left} alt="left" /></button>
            { show === 1 ?
            <img src={c1} alt='carousel' className='w-7/12 h-7/12 md:w-5/12 mh:h-5/12 shadow-xl rounded-lg' />
            : show === 2 ?
            <img src={c2} alt='carousel' className='w-7/12 h-7/12 md:w-5/12 mh:h-5/12 shadow-xl rounded-lg' />
            : show === 3 ?
            <img src={c3} alt='carousel' className='w-7/12 h-7/12 md:w-5/12 mh:h-5/12 shadow-xl rounded-lg' />
            :
            <img src={c4} alt='carousel' className='w-7/12 h-7/12 md:w-5/12 mh:h-5/12 shadow-xl rounded-lg' />
            }
            <button onClick={handleNext} className='h-max w-max my-auto mr-auto'><img className='w-3/4 h-3/4 hover:opacity-70 md:w-full md:h-full' src={right} alt="right" /></button>
        </div>
    </div>
  )
}

export default Carousel