function origin(href) {
  return (href.match(/^[a-z]+\:\/\/.*?(?=\/)/) || [])[0]
}

function patchOrigin(element) {
  if (!element.origin) {
    element.origin = origin(element.href)
  }
}

function createLink(href) {
  const a = document.createElement('a')
  a.href = href
  patchOrigin(a)
  return a
}

patchOrigin(window.location)

export default createLink
