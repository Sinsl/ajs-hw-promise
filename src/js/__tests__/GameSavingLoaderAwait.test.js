import GameSavingLoaderAwait from "../GameSavingLoaderAwait";
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

test('test GameSavingLoaderAwait', async () => {
  
    const saving = await GameSavingLoaderAwait.load();
    expect(saving).toEqual(obj);
  
});