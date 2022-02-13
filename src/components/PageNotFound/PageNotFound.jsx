import React from 'react';
import styles from './PageNotFound.module.css';

class PageNotFound extends React.Component {

  render() {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Страница не найдена.</p>
        <p className={styles.text}>Обычно такое случается, когда в адресной строке появляется текст, которого там быть не должно.</p>
        <ol className={styles.list}>Вы можете попробовать:
          <li className={styles.listItem}>кликнуть на заголовок сайта в шапке,</li>
          <li className={styles.listItem}>кликнуть на ссылку <a href="https://gar.cpapr.ru">https://gar.cpapr.ru</a> или ввести этот адрес самостоятельно в адресную строку</li>
        </ol>
        <p className={styles.text}>Если ничего не помогает, значит, это мы что-то чиним или улучшаем. В любом случае мы просим прощения за доставленные неудобства. Возвращайтесь к нам через некоторое время.</p>
      </main>
    );
  }
}

export default PageNotFound;
