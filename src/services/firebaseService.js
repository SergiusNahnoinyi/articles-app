import firebase from '../config/firebase';

const db = firebase.ref('/articles');

export const getAll = () => {
  return db;
};

export const create = data => {
  return db.push(data);
};

export const update = (key, data) => {
  return db.child(key).update(data);
};

export const remove = key => {
  return db.child(key).remove();
};

export const removeAll = () => {
  return db.remove();
};
