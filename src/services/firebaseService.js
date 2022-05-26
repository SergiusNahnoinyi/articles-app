import { ref, set } from 'firebase/database';
import db from '../config/firebase';

export const getAll = () => {
  return db;
};

export const create = data => {
  set(ref(db, '/articles'), { data });
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
