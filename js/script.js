'use strict';

// Select DOM elements
const authorName = document.querySelector('.quote__author');
const description = document.querySelector('.quote__paragraph');
const randomBtn = document.querySelector('.quote__btn');

const quotes = 'https://type.fit/api/quotes';

const init = async function (q) {
  const response = await fetch(q);

  const result = await response.json();

  const data = result[0];

  authorName.textContent = `${data.author}`;
  description.textContent = `${data.text}`;
};

init(quotes);

const getQuote = async function () {
  const response = await fetch('https://type.fit/api/quotes');

  const result = await response.json();

  const range = result.slice(0, 500);

  const random = Math.floor(Math.random() * range.length);

  const data = range[random];

  console.log(data);

  if (data.author !== null) {
    authorName.textContent = `${data.author}`;
    description.textContent = `${data.text}`;
  } else {
    return;
  }
};

randomBtn.addEventListener('click', getQuote);
