import { ButtonScrollTop } from '@/components'
import dynamic from 'next/dynamic'
import { AboveFold, Header } from './components'
import * as Styles from './styles'
import { HomePageProps } from './types'

const Arrivals = dynamic(() => import('./components').then(t => t.Arrivals), {
  ssr: false
})

const Category = dynamic(() => import('./components').then(t => t.Category), {
  ssr: false
})

const SeasonSale = dynamic(() => import('./components').then(t => t.SeasonSale), {
  ssr: false
})

const Collections = dynamic(() => import('./components').then(t => t.Collections), {
  ssr: false
})

const Footer = dynamic(() => import('./components').then(t => t.Footer), {
  ssr: false
})


export function HomeLayout (props: HomePageProps) {
  const { 
    data: {
      above_fold,
      collection_banner,
      arrivals,
      season_sale,
      collections
    } 
  } = props

  return (
    <>
      <Header />
      <Styles.Container>

        <AboveFold data={above_fold} />
        <div>
          <ButtonScrollTop />
          <Category data={collection_banner} />
          <Arrivals data={arrivals} />
          <SeasonSale data={season_sale} />
          <Collections data={collections} />
        </div>
        <Footer />
      </Styles.Container>
    </>
  )
}