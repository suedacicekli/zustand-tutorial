import { useEffect, useState } from "react";
import Drawer from "../../components/drawer/Drawer";
import GameCard from "../../components/gameCard/GameCard";
import { Game } from "../../model/game";
import gameStore from "../../store/gameStore";

type TabId = "tumOyunlar" | "kaydedilenOyunlar" | "ilgilenilmeyenOyunlar";

function Playstation() {
  const [activeTab, setActiveTab] = useState<TabId>("tumOyunlar");
  const [games, setGames] = useState<Game[]>([]);
  const savedGames = gameStore((state) => state.savedGames);
  const ignoredGames = gameStore((state) => state.ignoredGames);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/suedacicekli/zustand-tutorial/games"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  const filteredGames = games.filter(
    (game) =>
      !savedGames.some((savedGame) => savedGame.id === game.id) &&
      !ignoredGames.some((ignoredGame) => ignoredGame.id === game.id)
  );
  return (
    <>
      <Drawer />
      <div className="sm:ml-64">
        <div className="navbar bg-neutral text-neutral-content">
          <div className="navbar-start"></div>
          <img src="/psLogo.png" className="w-10 navbar-center" alt="" />
          <div className="navbar-end"></div>
        </div>
        <div role="tablist" className="tabs tabs-bordered w-full mt-10">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            id="tumOyunlar"
            className="tab"
            aria-label="Oyunlar"
            checked={activeTab === "tumOyunlar"}
            onChange={() => handleTabChange("tumOyunlar")}
          />

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            id="kaydedilenOyunlar"
            className="tab"
            aria-label="Kaydedilenler"
            checked={activeTab === "kaydedilenOyunlar"}
            onChange={() => handleTabChange("kaydedilenOyunlar")}
          />

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            id="ilgilenilmeyenOyunlar"
            className="tab"
            aria-label="İlgilenilmeyenler"
            checked={activeTab === "ilgilenilmeyenOyunlar"}
            onChange={() => handleTabChange("ilgilenilmeyenOyunlar")}
          />
        </div>
        <div className="games">
          <div
            role="tabpanel"
            className={`tab-content bg-base-100 p-6 ${
              activeTab === "tumOyunlar" ? "block" : "hidden"
            }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
          <div
            role="tabpanel"
            className={`tab-content bg-base-100 p-6 ${
              activeTab === "kaydedilenOyunlar" ? "block" : "hidden"
            }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {savedGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
          <div
            role="tabpanel"
            className={`tab-content bg-base-100 p-6 ${
              activeTab === "ilgilenilmeyenOyunlar" ? "block" : "hidden"
            }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {ignoredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Playstation;
