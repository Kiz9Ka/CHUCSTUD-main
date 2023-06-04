import './App.css';
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllArticles } from "./store/slices/FeedSlice";

// И так че у вас тут

const App = () => {
  // Диспач используется для отправки данных в стор используя определенный метод
  const dispatch = useDispatch();

  // Записываем в переменную posts при помощи хука useSelector данные приходящие с сервера
  // если обратишь внимание, идет иерархия state.feed.posts
  // МЫ ЧЕРЕЗ STATE ПОЛУЧАЕМ ДОСТУП К ОБЪЕКТУ FEED И ТАМ БЕРЕМ ЗНАЧЕНИЕ POSTS
  // если заметишь, в f12 приходит сначала пустой массив, указанный НАМИ, а далее данные с твоего сервера
  const posts = useSelector(state => state.feed.posts);

  // useEffect - хук предназначенный для побочных действий (изучи это), сюда входят:
  // обращение напрямую к документу (в реакте это нельзя делать, но если чешется ,то можно :))
  // Библа axios является аналогом fetch, ток прокачанной, метод get и адрес внутри работает как обычная строчка в браузере
  // then и внутри как раз таки диспач внутри которого метод FeedSlice.js записывающий в posts данные
  useEffect(() => {
    // Для получения чего-то другого - поменяй адрес откуда брать и пропиши свой слайс в store/slices
    axios.get('http://localhost:4444/posts').then(response => {
      dispatch(setAllArticles(response.data));
    });
  }, [dispatch]);

  // зачекай че там
  console.log(posts);

  // ну и по той же аналогии можешь теперь создавать свои слайсы, записывать значения
  // разницы особой нет
  // распаковывай переменную posts и обращайся к её значениям
  return (
      <section>
        <h1>Загляни в F12</h1>
      </section>
  );
};
export default App;