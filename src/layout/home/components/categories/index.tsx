import { Box, Container, Typography } from '@/components'
import Image from 'next/image'
import * as Styles from './styles'
import { CategoryProps } from './types'

export function Category (props: CategoryProps) {
  const {
    data
  } = props

  const renderCategories = data.map((value, index) => (
    <Styles.CategoryItem key={index}>
      <Styles.Content>
        <Styles.Title>{value.collection_type}</Styles.Title>
        <Typography color="heading">Collection</Typography>
      </Styles.Content>
      <Styles.Figure>
        <Image 
          src={value.image}
          alt=""
          fill
        />
      </Styles.Figure>
    </Styles.CategoryItem>
  ))

  return (
    <Styles.Container>
      <Container size="lg">
        <Box gap={1} flexWrap="wrap" justifyContent="center">
          {renderCategories}
        </Box>
      </Container>
    </Styles.Container>
  )
}