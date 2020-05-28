export default class Cart {
  constructor() {
    this.list = []
  }
  add(data) {
    let isExist = this.list.some((item) => item.id === data.id)
    if (isExist) {
      this.list = this.list.map(item => {
        if (item.id === data.id) {
          item.count++
        }
        return item
      })
    } else {
      this.list.push({
        ...data,
        count: 1
      })
    }
  }
  del(id) {
    this.list = this.list.filter(item => {
      if (item.id === id) {
        return false
      }
      return true
    })
  }
  clear() {
    this.list = []
    alert('购物车已清空')
  }
  getList() {
    return this.list.map(item => {
      return item
    })
  }
  static getCart() {
    if (!Cart.instance) {
      Cart.instance = new Cart()
    }
    return Cart.instance
  }
  init() {
    
  }
}