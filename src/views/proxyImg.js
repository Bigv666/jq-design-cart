import defaultImage from '../assets/default.jpg'
// 预加载图片
export default class ProxyImg {
  // static  INIT_IMG = defaultImage;
  constructor(img) {
    this.$el = img
    this.init_img = defaultImage
  }
  // 操作虚拟img,完成图片加载
  setSrc(targetUrl){
    this.$el.attr('src',this.init_img)
    // 创建虚拟dom
    const virtualImg = new Image()
    // 监听图片加载
    virtualImg.onload = () => {
      this.$el.attr('src',targetUrl)
    }
    virtualImg.src = targetUrl
  }
}