function switchStyle (stylesheetTitle) {
  var i
  var linkElement
  for (i = 0,
  linkElement = document.getElementsByTagName('link');
    i < linkElement.length; i++) {
    if ((linkElement[i].rel.indexOf('stylesheet') !== -1) &&
      linkElement[i].title) {
      linkElement[i].disabled = true
      if (linkElement[i].title === stylesheetTitle) {
        linkElement[i].disabled = false
      }
    }
  }
}
