import AsyncStorageFactory from '@react-native-community/async-storage';
import LegacyStorage from '@react-native-community/async-storage-backend-legacy';

interface IStorageModel {
  // Storage model
}

const legacyStorage = new LegacyStorage();

const storage = AsyncStorageFactory.create<IStorageModel>(legacyStorage, {});

export default storage;
