// console.log("HELLO DIMA");
// Отправьте GET запрос (fetch)
// на сайт
// http://getpost.itgid.info/index2.php.
// В качестве action укажите 1.
// Выведите в out-1 результат.
//  Запускаться функция должна по нажатию b-1.

// Юазовый запрос Fetch
fetch("https://api.punkapi.com/v2/beers")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
