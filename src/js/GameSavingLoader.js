import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((data) => {
        json(data).then((value) => {
          const objValue = new GameSaving(JSON.parse(value));
          resolve(objValue);
        }).catch((err) => {
          reject(err);
        });
      });
    });
  }
}
