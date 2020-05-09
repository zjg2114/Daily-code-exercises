class Dep {
  constructor() {
    this.eventBus = [];
  }
  // 需要有三个方法,订阅/取消订阅/发布

  //订阅
  subscrible(event, callback) {
    if (
      typeof event !== "string" &&
      Object.prototype.toString.call(callback) !== "[object Function]"
    ) {
      throw new Error("传入参数格式错误");
    }
    if (!this.eventBus[event]) {
      this.eventBus[event] = [];
    }
    this.eventBus[event].push(callback);
    // 链式调用
    return this
  }
  // 取消订阅
  unsubscrible(event, callback) {
    if (
        typeof event !== "string" &&
        Object.prototype.toString.call(callback) !== "[object Function]"
      ) {
        throw new Error("传入参数格式错误");
      }
    if (!this.eventBus[event] || this.eventBus[event].length===0) {
        throw new Error("没有事件可取消订阅")
    }
    this.eventBus[event].forEach(item,index,arr)
      // 链式调用
    return this
  }
  // 通知发布
  notify(event, callback) {}
}
let dep = new Dep();
dep.subscrible("click", () => {
  console.log(1);
});

console.log(dep);
