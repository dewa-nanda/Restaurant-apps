import { itActsAsFavoriteRestoModel } from './contract/favoriteRestourantContract';
import FavoritRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoritRestoIdb.getAllResto()).forEach(async (resto) => {
      await FavoritRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoritRestoIdb);
});
