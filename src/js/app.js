/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';
import GameSavingLoaderAwait from './GameSavingLoaderAwait';

// export function funcPromise() {
//   const user = GameSavingLoader.load().then((saving) => {
//     console.log(saving);
//     console.log(JSON.parse(saving));
//     return JSON.parse(saving);
//   }, (error) => {
//     console.log(error);
//   });
//   return user;
// }

GameSavingLoader.load().then((saving) => {
    console.log(saving);
  }, (error) => {
    console.log(error);
  });

(async () => {
    try {
      const saving = await GameSavingLoaderAwait.load();
      console.log(saving);
    } catch (e) {
      console.log(e.message);
    }
  })();

