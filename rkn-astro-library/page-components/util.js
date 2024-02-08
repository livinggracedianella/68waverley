import qs from 'qs'
import { marked } from 'marked'
import { default as PlainTextRenderer } from 'marked-plaintext'

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

export async function fetchPopulate(uri, populate) {
  const data = await fetchPageData(uri, {
    filters: {
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

export async function fetchPopulateSort(uri, populate, sort) {
  const data = await fetchPageData(uri, {
    filters: {
      websites: {
        key: {
          $eq: site(),
        },
      },
    },
    populate,
    sort,
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

export function markedPlain(text) {
  const renderer = new PlainTextRenderer()
  return marked(text, {
    gfm: true,
    breaks: true,
    mangle: false,
    headerIds: false,
    renderer: renderer,
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

export function contrastingText(backgroundColour) {
  let textColor = 'white'
  if (
    backgroundColour?.colourPicker === 'white' ||
    backgroundColour?.colourPicker === 'light' ||
    !backgroundColour?.colourPicker
  ) {
    textColor = 'var(--gunmetal)'
  }
  return textColor
}

export function contrastingAnchor(backgroundColour) {
  let anchorColor = 'var(--primary-color)'
  if (
    backgroundColour?.colourPicker === 'primary-color' ||
    backgroundColour?.colourPicker === 'chapel-purple' ||
    backgroundColour?.colourPicker === 'anchorage-blue' ||
    backgroundColour?.colourPicker === 'waverley-coral' ||
    backgroundColour?.colourPicker === 'gunmetal'
  ) {
    anchorColor = 'white'
  }
  return anchorColor
}

export function excerpt(text, length = 100) {
  if (text) {
    if (text.length <= length) {
      return markedPlain(text)
    } else {
      return (
        markedPlain(text)
          .substring(0, length)
          .split(' ')
          .slice(0, -1)
          .join(' ') + '...'
      )
    }
  }
}

export function richExcerpt(text, length = 200) {
  if (text) {
    if (text.length <= length) {
      return markedHelper(text)
    } else {
      return (
        markedHelper(text)
          .substring(0, length)
          .split(' ')
          .slice(0, -1)
          .join(' ') + '...'
      )
    }
  }
}
