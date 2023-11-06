import qs from 'qs'
import { marked } from 'marked'

export function site() {
  return import.meta.env.THIS_SITE
}

export async function fetchPageData(uri, options) {
  const pageDataUrl =
    import.meta.env.STRAPI_HOST + uri + '?' + qs.stringify(options)
  const response = await fetch(pageDataUrl)
  const pageData = await response.json()
  return pageData
}

export async function primaryColour() {
  const pageData = await fetchPageData('/api/websites', {
    filters: {
      key: {
        $eq: site(),
      },
    },
  })
  return `var(--${pageData.data[0].attributes.primary_colour})`
}

export async function fetchFilter(uri, slug) {
  const data = await fetchPageData(uri, {
    filters: {
      slug: {
        $eq: slug,
      },
      websites: {
        key: {
          $eq: site(),
        },
      },
    },
  })
  return data
}

export async function fetchFilterPopulate(uri, slug, populate) {
  const data = await fetchPageData(uri, {
    filters: {
      slug: {
        $eq: slug,
      },
      websites: {
        key: {
          $eq: site(),
        },
      },
    },
    populate,
  })
  return data
}

export function strapiAsset(uri) {
  return import.meta.env.STRAPI_HOST + uri
}

export function markedHelper(src) {
  return marked(src, {
    gfm: true,
    breaks: true,
    mangle: false,
    headerIds: false,
  })
}

export function parseDate(givenDate) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const date = new Date(givenDate)
  const fullDate =
    date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
  return fullDate
}
