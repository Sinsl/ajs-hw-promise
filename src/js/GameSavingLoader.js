/* eslint-disable arrow-body-style */
import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    // const data = read(); // возвращается Promise!
    // const value = json(data); // возвращается Promise!
    // return value;
    return read()
      .then((buffer) => {
        return buffer;
      })
      .then((data) => {
        return json(data);
      })
      .then(str => {
        const obj = JSON.parse(str);
        return new GameSaving(obj.id, obj.created, obj.userInfo);
      })
      .catch(() => {
        throw new Error('Ошибка');
    });
  }
}
