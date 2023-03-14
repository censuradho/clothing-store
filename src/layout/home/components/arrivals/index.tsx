import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { SectionTitle } from '../section-title'
import * as Styles from './styles'
import { ArrivalsProps } from './types'
import Image from "next/image"

import { breakpoints } from "@/constants/theme"
import { Typography } from "@/components"
import { toLocaleString } from "@/utils/helpers"
import { ProductItem } from "../product-item"

export function Arrivals (props: ArrivalsProps) {
  const  {
    data
  } = props

  const [sliderRef] = useKeenSlider({
    slides: {
      spacing: 10,
      perView: 1.15
    },
    breakpoints: {
      [breakpoints["smartphone-min"]]: {
        slides: {
          spacing: 10,
          perView: 2.6
        }
      },
      [breakpoints["laptops-min"]]: {
        slides: {
          spacing: 10,
          perView: 4.2
        }
      }
    }
  })

  const renderSlides = data.map((value, index) => (
    <div className="keen-slider__slide" key={index}>
      <ProductItem data={value}/>
    </div>
  ))
  

  return (
    <Styles.Container>
      <SectionTitle>New Arrivals</SectionTitle>
      <Styles.SlideView>
        <div ref={sliderRef} className="keen-slider">
          {renderSlides}
        </div>
      </Styles.SlideView>
    </Styles.Container>
  )
}