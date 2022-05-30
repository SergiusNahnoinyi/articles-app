import React, { useState, useEffect } from 'react';
import { getAll, removeArticle } from '../../services/firebaseService';

import s from './ArticlesPage.module.css';

export default function ArticlesPage() {
  const [articles, setArticles] = useState(null);
  const [activeArticle, setActiveArticle] = useState();

  useEffect(() => {
    getAll().then(snapshot => {
      const data = snapshot.val();

      setArticles(data);
    });
  }, []);

  const selectActiveArticle = article => {
    setActiveArticle(article);
  };

  const handleDelete = activeArticle => {
    if (!activeArticle) {
      return;
    }

    const newList = Object.values(articles).filter(
      article => article.title !== activeArticle.title,
    );

    removeArticle(activeArticle);
    setArticles(newList);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Articles list</h2>
      {articles &&
        Object.values(articles).map(article => (
          <article
            key={article.title}
            className={s.article}
            onClick={() => selectActiveArticle(article)}
          >
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </article>
        ))}
      <button className={s.button} onClick={() => handleDelete(activeArticle)}>
        Remove
      </button>
    </div>
  );
}
