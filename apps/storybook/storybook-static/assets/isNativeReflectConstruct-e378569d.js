function o(t) {
  return (
    (o = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }),
    o(t)
  )
}
function n() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1
  if (typeof Proxy == 'function') return !0
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    )
  } catch {
    return !1
  }
}
export {n as _, o as a}
//# sourceMappingURL=isNativeReflectConstruct-e378569d.js.map
