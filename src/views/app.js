import $ from 'jquery'
import Cart from './cart'
import List from './list'
import NavMenu from './navMenu'
export default class App {
  constructor(el) {
    this.$el = $(el);
  }

  initList() {
    let list = new List(this)
    console.log('init')
    list.init()
  }
  initNavMenu() {
    let menu = new NavMenu(this);
    menu.init();
  }
  initCartBtn() {
    let $btn = $(`<button>购物车</button>`)
    $btn.click(() => {
      let cart = Cart.getCart();
      let result = cart.getList()
      console.log(result)
    })
    this.$el.append($btn)
  }
  initClearBtn() {
    let $btn = $(`<button>清空</button>`)
    $btn.click(() => {
      let cart = Cart.getCart();
      cart.clear()
    })
    this.$el.append($btn)
  }
  init() {
    this.initNavMenu()
    this.initList()
    this.initCartBtn()
    this.initClearBtn()
  }
}