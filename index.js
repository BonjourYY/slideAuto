import $ from 'jquery';
import './style.css';
// get all button
var allButtons = $('.buttons > button');
// 遍历每个button，并添加click event
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (e) {
    // 获取点击的是第几个button
    let index = $(e.currentTarget).index();
    // 根据索引值来决定图片位移长度
    $('#images').css('transform', 'translateX(' + index * -300 + 'px)');
    // 改变点击按钮的样式
    allButtons.eq(index).addClass('red').siblings('.red').removeClass('red');
    n = index;
  });
}

// 定时器核心代码（自动轮播，通过不断循环点击按钮实现）
let n = 0;
allButtons.eq(n).trigger('click');
let timeId;
timeId = setInterval(() => {
  n += 1;
  allButtons.eq(n % allButtons.length).trigger('click');
}, 3000);

// 鼠标触碰，图片不轮播

// 此箭头函数不需要加参数
$('.window').mouseenter(() => {
  clearInterval(timeId);
});

// 鼠标移出，继续轮播
$('.window').mouseleave(() => {
  timeId = setInterval(function () {
    n += 1;
    allButtons.eq(n % allButtons.length).trigger('click');
  }, 3000);
});

console.log(1);
