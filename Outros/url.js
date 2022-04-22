const urlImg = (uri) => {
  const imageSizeParam = '{w}x{h}'
  return uri.includes(imageSizeParam)
  ? uri.replace(imageSizeParam, '64x64')
  : uri
}

console.log(urlImg('<img src="ter" />'))