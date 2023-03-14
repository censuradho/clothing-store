import { useMemo } from 'react'

import * as Styles from './styles'
import { AboveFoldProps } from './types'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { breakpoints } from '@/constants/theme'
import { useState } from 'react'
import { Box, Button, Container } from '@/components'

export function AboveFold (props: AboveFoldProps) {
  const { data } = props

  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
    },
    [
      (slider) => {
        let timeout: any;

        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  );

  const renderDots = data
    .map((_, index) => (
      <Styles.Dot 
        key={index} 
        active={index === currentSlide} 
        onClick={() => instanceRef.current?.moveToIdx(index)}
      />
    ))

  const renderSlides = useMemo(() => data.map((value, index) => (
    <div className="keen-slider__slide" key={index}>
      <Container size="md">
        <Styles.Content>
          <Box flexDirection="column" alignItems="flexStart" gap={0.5}>
            <Styles.SubTitle>{value.sub_title}</Styles.SubTitle>
            <Styles.Title>{value.title}</Styles.Title>
            <Button>{value.action.label}</Button>
          </Box>
        </Styles.Content>
      </Container>
      <Styles.Figure>
        <Image 
          src={value.image} 
          alt={value.title} 
          fill
          style={{ objectFit: 'cover' }} 
        />
      </Styles.Figure>
    </div>
  )), [])
  
  if (!data) return null

  return (
    <Styles.Container>
      <div ref={sliderRef} className="keen-slider" style={{ flex: 1 }}>
        {renderSlides}
      </div>
      <Styles.DotContainer>
        {renderDots}
      </Styles.DotContainer>
    </Styles.Container>
  )
}