import { ref, push, get } from 'firebase/database';
import db from '../config/firebase';

const articlesRef = ref(db, 'articles');

export const getAll = () => {
  return get(articlesRef);
};

export const create = (title, description, published) => {
  push(articlesRef, { title, description, published });
};

export const update = (key, data) => {
  return db.child(key).update(data);
};

export const removeArticle = activeArticle => {};

export const removeAll = () => {
  return db.remove();
};
