import qs from 'qs'

export async function fetchPageData(uri, options) {
  const pageDataUrl =
    import.meta.env.STRAPI_HOST + uri + '?' + qs.stringify(options)
  const response = await fetch(pageDataUrl)
  const pageData = await response.json()
  return pageData
}

export function strapiAsset(uri) {
  return import.meta.env.STRAPI_HOST + uri
}
