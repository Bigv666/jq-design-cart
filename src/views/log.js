export default function log(type) {
  return function(target,name,descriptor) {
    let originMethod = descriptor.value;
    descriptor.value = function() {
      console.log(`日志上报 ${type}`)
      return originMethod.apply(this, arguments)
    }
    return descriptor
  }
}