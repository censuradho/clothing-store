import { Box, Container } from '@/components'
import { Header } from '../home/components'
import { Colors, Info, Preview, Sizes } from './components'
import * as Styles from './styles'
import { ProductPageProps } from './types'

export function ProductLayout (props: ProductPageProps) {
  const { 
    data
  } = props

  return (
    <>
      <Header />
      <Styles.Container>
        <Container size="lg">
          <Styles.Content>
            <Preview data={data.images} />
            <Box flexDirection="column">
              <Info data={data} />
              <Sizes data={data.sizes} />
              <Colors data={data} />
            </Box>
          </Styles.Content>
        </Container>
      </Styles.Container>
    </>
  )
}