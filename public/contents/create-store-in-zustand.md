# Zustand'de Store Oluşturmak İçin

---

Projemize öncelikle zustand 'i yükleyelim.

    npm install zustand

Kütüphane kurulduktan sonra, kodlarımızı daha düzenli yönetmek ve durumları saklamak için bir "store" oluşturmalıyız. Bu adımları takip ederek bir `gameStore` oluşturuyoruz:

1.  `src` dizini altında `store` adında bir klasör oluşturun.
2.  Oluşturduğunuz `store` klasörü içine `gameStore.ts` adında bir dosya ekleyin.
3.  İçeriğini aşağıdaki gibi düzenleyin:

Burada, `create` fonksiyonunu kullanarak bir "store" oluşturuyoruz. Bu fonksiyon, bir geri çağrı fonksiyonunu alır. İşte bu geri çağrı fonksiyonu içinde, başlangıç durumunu ve durumu güncellemek için `set` fonksiyonunu kullanarak bir nesne tanımlıyoruz.

```js
import { create } from "zustand";

const gameStore = create((set) => ({
  savedGames: [],
  setSavedGame: (game) =>
    set((state) => ({
      savedGames: state.savedGames.includes(game)
        ? state.savedGames.filter((g) => g !== game)
        : [...state.savedGames, game],
    })),
}));

export default gameStore;
```

Bu sayede, `setSavedGame` fonksiyonu ile `savedGames` dizisini güncelleyebiliriz. Eğer `game` zaten listede varsa, çıkarılır; yoksa eklenir.

Bu yapı, zustand'ın esnek ve basit bir şekilde durum yönetimi yapmayı temsil eder.
