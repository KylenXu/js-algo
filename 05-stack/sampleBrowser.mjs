import ArrayStack from './arrayStack.mjs';
class Browser {
  constructor() {
    this.curPage = '';
    this.stackL = new ArrayStack();
    this.stackR = new ArrayStack();
  }
  // 浏览页面
  browse(page) {
    this.stackL.push(this.curPage);
    this.curPage = page;
    this.stackR.clear();
    this.showStack();
  }
  // 回退
  back() {
    const tempPage = this.stackL.pop();
    if (!tempPage) return;
    this.stackR.push(this.curPage);
    this.curPage = tempPage;
    this.showStack();
  }
  // 前进
  front() {
    const tempPage = this.stackR.pop();
    if (!tempPage) return;
    this.stackL.push(this.curPage);
    this.curPage = tempPage;
    this.showStack();
  }
  showStack() {
    console.log('当前页面是：' + this.curPage);
    console.log('后退页面栈：' + this.stackL.display());
    console.log('前进页面是：' + this.stackR.display());
    console.log('------------------------------');
  }
}

const testBrowser = new Browser();

testBrowser.browse('www.google.com');
testBrowser.browse('www.github.com');
testBrowser.browse('www.baidu.com');
testBrowser.back();
testBrowser.back();
testBrowser.front();
testBrowser.browse('www.new.com');
