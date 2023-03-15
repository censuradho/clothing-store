import NextHead from 'next/head'
import { HeadProps } from './types'

import qs from 'querystring'

export function Head (props: HeadProps) {
  const {
    description,
    title,
    image = 'https://mycv-online.vercel.app/og-image.png',
    og,
    twitter,
    ogCustom,
  } = props

  const twitterMeta = {
    description: twitter?.description || description,
    image: twitter?.image || image,
    title: twitter?.title || title
  }

  const ogMeta = {
    description: og?.description || description,
    title: og?.title || title,
    image: og?.image || image
  }

  const query = ogCustom ? qs.stringify(ogCustom) : ''

  return (
    <NextHead>
      <title>{title}</title>
      {description && <meta name="description" content={description}/>}
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="language-lp" content="pt-BR" />
      <meta property="og:locale" content="pt-BR" />
      <meta property="og:type" content="website" />
      {ogMeta.title && <meta property="og:title" content={ogMeta.title} />}
      {ogMeta.description && <meta property="og:description" content={ogMeta.description} />}
      {ogMeta.image && !ogCustom && <meta property="og:image" content={ogMeta.image} />}
      <meta name="twitter:card" content="summary" />
      {twitterMeta.title && <meta property="twitter:title" content={twitterMeta.title} />}
      {twitterMeta.image && <meta property="twitter:image" content={twitterMeta.image} />}
      {twitterMeta.description && <meta property="twitter:description" content={twitterMeta.description} />}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </NextHead>
  )
}