window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag("js", new Date())
gtag(
  "config",
  "UA-12439564-15"
)(function(h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function() {
      ;(h.hj.q = h.hj.q || []).push(arguments)
    }
  h._hjSettings = { hjid: 1507587, hjsv: 6 }
  a = o.getElementsByTagName("head")[0]
  r = o.createElement("script")
  r.async = 1
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
  a.appendChild(r)
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
