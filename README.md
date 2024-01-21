# Zustand Tutorial Projesi

Bu proje atmosware içerisinde sunulacak olan Zustand tutorial projesidir. Bu proje ile Zustand'in temel kullanımını öğrenebilirsiniz.

Projeye yeni bir döküman eklemek için : 

- Öncelikle `public/contents` dizini altına yeni bir markdown dosyası oluşturun. Örneğin `public/contents/create-project.md`
- Ardından `public/contents.json` dosyasına yeni dökümanın bilgilerini ekleyin. Örneğin: 

```json
{
    "id": 3,
    "title": "Bir proje oluşturalım",
    "url": "/create-project",
    "content": "/contents/create-project.md?url"
  },
```

Bu sayede yeni döküman hem menüye eklenecektir. Hemde ilgili sayfa oluşturulacaktır. Title kısmı menüde görünecek olan başlıktır. Url kısmı ise dökümanın url'ini belirtir. Content kısmı ise dökümanın içeriğini belirtir. Content yerine eklediğiniz markdown dosyasının path'ini yazabilirsiniz. Örneğin: `/contents/create-project.md`

## Markdown dosyasında local image kullanmak

Eğer markdown dosyanızda local bir image kullanmak istiyorsanız, `public/screenshots` dizini altına image'ınızı ekleyin. Ardından markdown dosyanızda aşağıdaki gibi kullanabilirsiniz.

```markdown
![Bear](../screenshots/json-view.jpeg)
```

## Hazırlayanlar

- Sueda Çiçekli
- Büşra Kosnak
- İrem Gündoğan