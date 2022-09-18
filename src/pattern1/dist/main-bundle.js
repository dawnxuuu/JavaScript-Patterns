
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
// 单例模式
class Singleton {
  constructor (name) {
    if (!Singleton.instance) {
      this.name = name;
      Singleton.instance = this;
    }

    return Singleton.instance
  }

  getName () {
    console.log(this.name + '');
  }
}

const a = new Singleton('第一次实例化');
const b = new Singleton('第二次实例化');

a.getName();
b.getName();

console.log('=xu=', a === b);
