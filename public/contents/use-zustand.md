# Zustand Nasıl Kullanılır

Küçük, hızlı ve ölçeklenebilir bir çıplak kemik durum yönetimi çözümü. Zustand, kancalara dayalı rahat bir API'ye sahiptir. Bu, şablonsuz veya tutkulu değildir, ancak açık ve flux benzeri olması için yeterli düzeni vardır.

Sevimli olduğu için onu küçümsemeyin, pençeleri var! Korkunç zombie child problemi, React concurrency ve karışık renderer'lar arasında bağlam kaybı gibi yaygın sorunlarla başa çıkmak için çok zaman harcandı. React alanındaki bu sorunları doğru bir şekilde çözen tek durum yöneticisi olabilir.

Canlı bir demo burada denenebilir.

Kurulum Zustand, kullanım için NPM paketi olarak mevcuttur:


    npm install zustand

# Veya, tercih ettiğiniz herhangi bir paket yöneticisini kullanın.` 

Önce bir depo oluşturun Depo bir kancadır! İçine her şeyi koyabilirsiniz: ilkel veri tipleri, nesneler, fonksiyonlar. Set fonksiyonu durumu birleştirir.

![enter image description here](https://tsh.io/wp-content/uploads/2023/02/zustand-react-small.png)

    import { create } from 'zustand'
    
    const useStore = create((set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }))


Ardından bileşenlerinizi bağlayın ve işte bu kadar! Herhangi bir yerde kancayı kullanabilirsiniz, sağlayıcı olmadan. Durumunuzu seçin ve tüketen bileşen, bu durum değiştikçe yeniden render yapacaktır.

javascriptCopy code

`function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} civarında...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>artır</button>
}`
