import GameSavingLoader from "../GameSavingLoader";
const obj = {
  id: 9,
  created: 1546300800, 
  userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
  }
}


test('test GameSavingLoader', (done) => {
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(obj);
    done();
  });
});
//так тоже работает
test('the data will be peanut butter', () => {
  return expect(GameSavingLoader.load()).resolves.toEqual(obj);
});
