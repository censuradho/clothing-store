import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import * as Styles from './styles'
import { PreviewProps } from './types'
import Image from 'next/image'
import { useMemo, useState } from 'react'

export function Preview (props: PreviewProps) {
  const {
    data
  } = props

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created () {
      setIsLoading(true)
    },
    slides: {
      perView: 1
    }
  })

  const renderImages = useMemo(() => data.map((value, index) => (
    <div className="keen-slider__slide" key={index}>
      <Styles.Figure >
        <Image 
          src={value}
          alt=""
          fill
        />
      </Styles.Figure>
    </div>
  )), [])

  const renderDots = useMemo(() => isLoading &&
  [...Array(instanceRef?.current?.track.details.slides.length  || 0)
    .fill(2)]
    .map((_, index) => (
      <Styles.Dot 
        key={index} 
        active={index === currentSlide} 
        onClick={() => instanceRef.current?.moveToIdx(index)}
      />
    ))
  , [currentSlide, instanceRef, isLoading])

  return (
    <Styles.Container>
      <div ref={sliderRef} className="keen-slider">
        {renderImages}
      </div>
      <Styles.DotContainer>
        {renderDots}
      </Styles.DotContainer>
    </Styles.Container>
  )
}