/* eslint-disable arrow-body-style */
import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoaderAwait {
  static async load() {
        const buffer = await read();
        const data = await json(buffer);
        const obj = JSON.parse(data);
        return new GameSaving(obj.id, obj.created, obj.userInfo);
  }
}