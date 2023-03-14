import { StandardLonghandProperties } from '@stitches/react/types/css'

export function toLocaleString (value: number) {
  return value.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  })
} 

export function parseToVariant <T> (obj: Record<string, string>, property: keyof StandardLonghandProperties) {
  return Object
    .entries(obj)
    .map(([value]) => ({
      [value]: {
        [property]: `$${value}`
      }
    }))
    .reduce((prev, next) => ({
      ...prev,
      ...next
    }), {}) as unknown as T
}


export const isBrowser = () => typeof window !== 'undefined'

export function setMask(value: string | number, pattern: string) {
  let i = 0;
  const valueInString = String(value).replace(/\D/g, "");

  // eslint-disable-next-line no-plusplus
  return pattern.replace(/#/g, () => valueInString[i++] || "");
}


export const resolvePath = (path: string, obj: Record<string, any>) => {
  let tempPath = path

  Object.keys(obj).map(key => (tempPath = tempPath.replace(`:${key}`, obj[key])))

  return tempPath
}

export function saveAs(uri: string, filename: string) {

  var link = document.createElement('a');

  if (typeof link.download === 'string') {

    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);

  } else {

    window.open(uri);

  }
}