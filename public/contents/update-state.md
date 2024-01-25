
## State Güncelleme

Zustand kütüphanesi kullanarak bir store oluşturduğumuzda, bu store içinde yazdığımız methodlar aracılığıyla state'i güncelleyebiliriz. Store oluşturma bölümünde belirttiğimiz savedGames üzerinden gidelim.

### `setSavedGame` Methodu:

    // ...
    savedGames: [],
    setSavedGame: (game) =>
        set((state) => ({
          savedGames: state.savedGames.includes(game)
            ? state.savedGames.filter((g) => g !== game)
            : [...state.savedGames, game],
        })),
    // ...


Yukarıdaki method parametre olarak bir game değeri alır. Ardından oyunu `savedGames` listesinde bulunduruyorsa onu kaldırır, bulundurmuyorsa ekler. Bu sayede, belirli bir oyunun kaydedilip kaydedilmediğini kontrol edebiliriz.

### Methodu Kullanma:

Store'da yer alan `setSavedGame` methodunu kullanabilmek için, aşağıdaki gibi bir değişken oluşturabiliriz:

`const setSavedGames = gameStore((state) => state.setSavedGame);` 

Ardından, bu değişken aracılığıyla methodu çağırabiliriz. Örneğin, bir butonun `onClick` fonksiyonu içinde bu methodu kullanarak oyunu kaydedebiliriz:

`<button onClick={() => setSavedGames(game)}> Kaydet </button>` 

Bu method, belirtilen oyun değeri ile çağrıldığında, store'daki `savedGames` state'ini güncelleyerek istenilen değişikliği gerçekleştirir. Bu sayede, React uygulamasında state yönetimini etkili bir şekilde sağlayabiliriz.