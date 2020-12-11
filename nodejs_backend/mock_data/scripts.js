// For IMDB
data.forEach((ele) => {
  let tmp = {};
  tmp.imageURL = ele.querySelector(
    ".removable-wrapper"
  ).firstElementChild.firstElementChild.src;
  tmp.name =
    ele.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.text;
  tmp.genre =
    ele.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild.innerText;
  tmp.rating =
    ele.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.lastElementChild.innerText;
  obj.push(tmp);
});

// For Hotstar
data.forEach((ele) => {
  let tmp = {};
  tmp.imageURL =
    ele.firstElementChild.firstElementChild.firstElementChild.firstElementChild.src;
  obj.push(tmp);
});
