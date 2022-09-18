// 单例模式
class Singleton {
  constructor (name) {
    if (!Singleton.instance) {
      this.name = name
      Singleton.instance = this
    }

    return Singleton.instance
  }

  getName () {
    console.log(this.name + '')
  }
}

const a = new Singleton('第一次实例化')
const b = new Singleton('第二次实例化')

a.getName()
b.getName()

console.log('=xu=', a === b)