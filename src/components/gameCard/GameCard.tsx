import { BookmarkIcon, HandThumbDownIcon } from "@heroicons/react/16/solid";
import { Game } from "../../model/game";
import gameStore from "../../store/gameStore";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const savedGames = gameStore((state) => state.savedGames);
  const ignoredGames = gameStore((state) => state.ignoredGames);
  const setSavedGames = gameStore((state) => state.setSavedGame);
  const setIgnoredGames = gameStore((state) => state.setIgnoredGame);

  const isGameSaved = savedGames.some((savedGame) => savedGame.id === game.id);
  const isGameIgnored = ignoredGames.some(
    (ignoredGame) => ignoredGame.id === game.id
  );

  return (
    <div className="relative mt-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border shadow-md">
      <a
        className="relative mx-3 mt-3 flex overflow-hidden rounded-xl"
        href="#">
        <img
          className="object-cover min-w-full"
          src={game.mainImage}
          alt="product image"
        />
        <span className="absolute top-0 p-1 left-0 m-2 badge badge-ghost">
          {game.discount}% İndirim
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href={game.url} target="_blank" className="line-clamp-2 min-h-14">
          <h5 className="text-xl tracking-tight ">{game.game}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p className="flex gap-2 items-baseline	">
            <span className="text-sm  line-through">₺{game.price}</span>
            <span className="text-3xl font-bold ">
              ₺{game.newPrice.toFixed(1)}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between text-sm font-medium">
          {isGameSaved ? (
            <button
              className="btn btn-outline btn-error"
              onClick={() => setSavedGames(game)}>
              <BookmarkIcon className="h-5 w-5" /> Listeden Çıkar
            </button>
          ) : !isGameIgnored ? (
            <button
              className="btn btn-outline btn-error"
              onClick={() => setSavedGames(game)}>
              <BookmarkIcon className="h-5 w-5" /> Kaydet
            </button>
          ) : null}

          {isGameIgnored && (
            <button
              className="btn btn-outline btn-accent"
              onClick={() => setIgnoredGames(game)}>
              <HandThumbDownIcon className="h-5 w-5" /> Listeden Çıkar
            </button>
          )}
          {!isGameSaved && !isGameIgnored && (
            <button
              className="btn btn-outline btn-accent"
              onClick={() => setIgnoredGames(game)}>
              <HandThumbDownIcon className="h-5 w-5" /> İlgilenmiyorum
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
