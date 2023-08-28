export async function fetchPageData(uri) {
  const pageDataUrl = import.meta.env.STRAPI_HOST + uri
  const response = await fetch(pageDataUrl)
  const pageData = await response.json()
  return pageData
}
