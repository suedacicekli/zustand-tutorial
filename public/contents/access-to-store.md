# Store'a Erişmek

Zustand'de bir store'a erişmek için ilk olarak oluşturduğumuz store'u import etmemiz gerekiyor. Daha sonra bu store'u istediğimiz yerde kullanabiliriz. Aşağıda, store'umuzu bulunduğu dizinden import etme örneği bulunmaktadır:

```js
import  gameStore  from  "../../store/gameStore";
```

Daha önce tanımladığımız `savedGames` değerine ulaşmak için ise aşağıdaki gibi çağırma işlemi gerçekleştirebiliriz:

```js
const  savedGames  =  gameStore((state) =>  state.savedGames);
```