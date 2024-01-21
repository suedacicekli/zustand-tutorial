import { Link } from "react-router-dom";
import Team from "./Team";

function Hero() {
  return (
    <div className="sm:ml-64">
      <div className="hero min-h-screen bg-base-200 p-4">
        <div className="hero-content flex-col">
          <img
            src="https://raw.githubusercontent.com/pmndrs/zustand/HEAD/bear.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Zustand Tanıtım Sunumuna Hoşgeldiniz 👋🏼
            </h1>
            <p className="py-6">
              Bu sunumda, React uygulamalarında state yönetimi için kullanılan
              <strong> Zustand</strong> kütüphanesinin kullanımı ve özellikleri
              anlatılacaktır.
            </p>
            <Link to="/zustand-nedir">
              <button className="btn btn-accent">Haydi Başlayalım</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
