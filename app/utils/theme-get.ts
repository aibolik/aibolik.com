

export const get = (obj: any, key: string, fallback: string | null) => {
  const keyPath = key && key.split ? key.split('.') : [key]
  for (let p = 0; p < keyPath.length; p++) {
    obj = obj ? obj[keyPath[p]] : undefined
  }
  return obj === undefined ? fallback : obj
}

export const themeGet = (path: string, fallback = null) => (props: { theme: any }) =>
  get(props.theme, path, fallback)