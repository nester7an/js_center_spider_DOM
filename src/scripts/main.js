'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallHeightOrWidth = wall.clientHeight;
const spiderHeightOrWidth = spider.clientHeight;

spider.style.top = `${wallHeightOrWidth / 2 - spiderHeightOrWidth / 2}px`;
spider.style.left = `${wallHeightOrWidth / 2 - spiderHeightOrWidth / 2}px`;
