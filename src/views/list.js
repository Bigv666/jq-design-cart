import {GET_LIST} from '../config/index'
import Axios from 'axios';
import $ from 'jquery';
import CreateItem from './createItem'
export default class List{
  constructor(app) {
    this.app = app;
    this.$el = $('<div></div>')
  }

  // 获取数据
  loadData() {
    return Axios(GET_LIST).then(result => {
      return result.data.data
    })
  }
  // 生成列表
  initItemList(data) {
    data.map(item => {
      // 创建item
      let listItem = new CreateItem(this,item);
      listItem.init()
    })
  }
  // 渲染
  render() {
    this.app.$el.append(this.$el)
  }
  init() {
    this.loadData().then(data => {
      this.initItemList(data)
    }).then(() => {
      this.render()
    })
  }
}