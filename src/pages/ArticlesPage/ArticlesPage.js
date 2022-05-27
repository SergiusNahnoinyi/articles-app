import React, { useState, useEffect } from 'react';
import { getAll } from '../../services/firebaseService';

import s from './ArticlesPage.module.css';

export default function ArticlesPage() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getAll().then(snapshot => {
      const data = snapshot.val();

      setArticles(data);
    });
  }, []);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Articles list</h2>
      {articles &&
        Object.values(articles).map(article => (
          <article key={article.title} className={s.article}>
            <h3>{article.title}</h3>
          </article>
        ))}
      <button className={s.button}>Remove</button>
    </div>
  );
}
