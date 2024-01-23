
#  Zustand ⚔️ Jotai

Zustand tek bir depo iken Jotai bir araya gelebilen ilkel atomlardan oluşuyor. 
 Zustand'da create fonksiyonu kullanılarak bir store oluşturulurken, Jotai'da atom fonksiyonu ile bir atom tanımlanır. İki kütüphane de React bileşenlerinde bu durumu kullanmak için kendi özel hook'larını (Zustand'da useStore, Jotai'da useAtom) sağlar.


# Kurulum
```js

# npm
npm i jotai

# yarn
yarn add jotai

# pnpm
pnpm add jotai
```


---

# ⚡ Örnek Kullanım


```js
import { atom, useAtom } from 'jotai';

const countAtom = atom<number>(0);

function JotaiComponent() {

  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

```

* ⚡ Küçük Bir Karşılaştırma Yapalım

# Özellikler  | Zustand                           | Jotai                              |

| **Açıklama**

 🌟 Küçük, hızlı ve ölçeklenebilir React durum yönetimi  

 🌈 Atomlar üzerine kurulu, modüler bir yapı sunan React durum yönetimi kütüphanesi.

| **API Tasarımı**        
 🚀 Minimal API, basit kullanım.      

 🚀 Atomlar üzerine kurulu, geniş ve modüler bir yapı.

| **Performans**          
 ⚡  Performansa odaklanır, gereksiz re-render'ları minimize etmeye çalışır. 

 ⚛ Atomlar ve değişmezlik prensipleri ile performans artırılmaya çalışılır.

| **React Entegrasyonu**  
 🔗 React hook'larını kullanır.      

 🔄 React ile sorunsuz entegrasyon, atomlar üzerinden durumu yönetir.

| **TypeScript Desteği**  
 📝 Var, durumun tipini belirleme imkanı. 

 📝 Var, atomlar üzerinden tip güvenliği

| **Topluluk ve Destek**  
 🌐 Geniş bir topluluğa ve iyi belgelere sahiptir.  

 🌱 Henüz Zustand kadar büyük bir topluluğa sahip değildir.    

| **Popülerlik**          
 ⭐ Yaygın kullanılan bir kütüphanedir.

 📈 Popülerlik kazanmaya başlamış ancak Zustand kadar yaygın değildir.    


* Popülerlik ve diğer özellikler [jotai-vs-zustand](https://npmtrends.com/jotai-vs-zustand) üzerinden incelenebilir.