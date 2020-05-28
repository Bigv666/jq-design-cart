import $ from 'jquery'

import Cart from './cart'
import ProxyImg from './proxyImg'
import log from './log'

import '../style/item.scss'
export default class Item {
  constructor(list,data){
    this.list = list;
    this.data = data;
    this.$el = $(`<div class='item-wrapper'></div>`)
    this.cart = Cart.getCart()
  }

  initContent() {
    let $el = this.$el
    let data = this.data;
    let $img = $(`<img />`)
    $el.append($img)
    let img = new ProxyImg($img)
    img.setSrc(data.image)
    $el.append($(`<p class='item-name'>名称：${data.name}</p>`))
    $el.append($(`<p class='item-price'>价格：${data.price}</p>`))
  }
  initBtn() {
    let $el = this.$el;
    let $btn = $(`<button class='item-btn'>按钮</button>`)

    $btn.click(() => {
      this.addToCart()
    })
    $el.append($btn)
  }

  // 添加到购物车
  @log('add')
  addToCart() {
    this.cart.add(this.data)
  }
  // 从购物车移除
  @log('del')
  delFormCart() {
    this.cart.del(this.data.id)
  }

  render() {
    this.list.$el.append(this.$el)
  }

  init() {
    this.initContent()
    this.initBtn()
    this.render()
  }
}