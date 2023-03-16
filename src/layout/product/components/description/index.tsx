import { Button, Typography } from '@/components';
import { useState } from 'react';
import * as Styles from './styles'
import { DescriptionProps } from './types'

export function Description (props: DescriptionProps) {
  const {
    data
  } = props

  const [isHidden, toggleIsHidden] = useState(true);

  if (!data?.description) return null


  return (
    <Styles.Container>
      <Typography as="strong" fontWeight="400" color="heading" size="md">Description</Typography>
      <Styles.HiddenView hidden={isHidden}>
        <Typography size="xsm">{data?.description}</Typography>
      </Styles.HiddenView>
      <Styles.ShowMoreView>
        <Button
          onClick={() => toggleIsHidden(prevState => !prevState)}
          variant="letter"
          icon={{
            name: isHidden ? "arrowDown" : "arrowUp",
          }}
        >
          {isHidden ? "Ver mais" : "Ver menos"}
        </Button>
      </Styles.ShowMoreView>
    </Styles.Container>
  )
}