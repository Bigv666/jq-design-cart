import $ from 'jquery'
import '../style/navmenu.scss'
export default class NavMenu {
  constructor(app) {
    this.app = app
    this.$el = $(`<div class='navmenu-wrapper'></div>`)
  }

  initItem() {
    let $shop = $(`<a class='nav-item active'>商品</a>`)
    let $cart = $(`<a class='nav-item'>购物车</a>`)
    $shop.click(() => {
      $shop.addClass('active')
      $cart.removeClass('active');
    })
    $cart.click(() => {
      $cart.addClass('active')
      $shop.removeClass('active')
    })
    this.$el.append($shop)
    this.$el.append($cart)
  }
  render() {
    this.app.$el.append(this.$el)
  }
  init() {
    this.initItem()
    this.render()
  }
}