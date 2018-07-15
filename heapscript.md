```js
window.heap = window.heap || [],
  (heap.load = function(e, t) {
    ;(window.heap.appid = e), (window.heap.config = t = t || {})
    
    /*
By default, tracking beacons sent from https pages will be sent using https while beacons sent from http pages will be sent using http. Setting forceSSL to true will force http pages to also send all beacons using https.
    */
    var r = t.forceSSL || 'https:' === document.location.protocol,
      a = document.createElement('script')
    ;(a.type = 'text/javascript'),
      (a.async = !0),
      (a.src =
        (r ? 'https:' : 'http:') +
        '//cdn.heapanalytics.com/js/heap-' +
        e +
        '.js')
    var n = document.getElementsByTagName('script')[0]
    n.parentNode.insertBefore(a, n)
    for (
      var o = function(e) {
          return function() {
            heap.push([e].concat(Array.prototype.slice.call(arguments, 0)))
          }
        },
        p = [
          'addEventProperties',
          'addUserProperties',
          'clearEventProperties',
          'identify',
          'resetIdentity',
          'removeEventProperty',
          'setEventProperties',
          'track',
          'unsetEventProperty',
        ],
        c = 0;
      c < p.length;
      c++
    )
      heap[p[c]] = o(p[c])
  })
heap.load('693684884')
```
