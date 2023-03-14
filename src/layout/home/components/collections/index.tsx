import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"
import { useState, useMemo } from 'react'

import { breakpoints } from '@/constants/theme'

import { SectionTitle } from '../section-title'
import * as Styles from './styles'
import { CollectionsProps } from './types'
import Image from 'next/image'
import { Button, Container, Typography } from '@/components'

export function Collections (props: CollectionsProps) {
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
      spacing: 10,
      perView: 1.15
    },
    breakpoints: {
      [breakpoints["smartphone-min"]]: {
        slides: {
          spacing: 30,
          perView: 2,
        },
      },
    }
  },
  )

  const renderSlides = useMemo(() => data?.map((value, index) => (
    <div key={index} className="keen-slider__slide number-slide1">
      <Styles.Content>
        <Typography 
          as="h3" 
          fontWeight="500" 
          size="lg" 
          color="heading"
        >{value.title}</Typography>
        <Button as="a" href={value.action.path}>{value.action.label}</Button>
      </Styles.Content>
      <Styles.Figure >
        <Image src={value.image} alt={value.title} fill/>
      </Styles.Figure>
    </div>
  ))
  , [])
  
  const renderDots = useMemo(() => isLoading &&
    [...Array(((instanceRef?.current?.track.details.slides.length || 2) - 1 ) || 0)
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
    <Container size="lg">
      <Styles.Container>
        <SectionTitle>Collections</SectionTitle>
        <div ref={sliderRef} className="keen-slider">
          {renderSlides}
        </div>
        <Styles.DotContainer>
          {renderDots}
        </Styles.DotContainer>
      </Styles.Container>
    </Container>
  )
}