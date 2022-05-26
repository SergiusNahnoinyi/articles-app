import React, { useState } from 'react';
import { create } from '../../services/firebaseService';

import s from './ArticlesPage.module.css';

export default function ArticlesPage() {
  const initialState = {
    title: '',
    description: '',
    published: false,
  };

  const [article, setArticle] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = () => {
    const data = {
      title: article.title,
      description: article.description,
      published: false,
    };

    create(data);
    setSubmitted(true);
  };

  const newArticle = () => {
    setArticle(initialState);
    setSubmitted(false);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Create an article</h2>
      {submitted ? (
        <div>
          <h3 className={s.subtitle}>You submitted successfully!</h3>
          <button className={s.button} onClick={newArticle}>
            Add
          </button>
        </div>
      ) : (
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            Title
            <input
              className={s.input}
              type="text"
              name="title"
              value={article.title}
              onChange={handleChange}
              placeholder="Write down a title of the article"
              autoComplete="on"
              required
            />
          </label>
          <label className={s.label}>
            Description
            <input
              className={s.input}
              type="text"
              name="description"
              value={article.description}
              onChange={handleChange}
              placeholder="Write down a description of the article"
              autoComplete="on"
              required
            />
          </label>
          <button className={s.button} type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
