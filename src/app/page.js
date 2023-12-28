import Card from "./components/Card";
import { data } from "./utils/data";

export default function Home() {
  return (
    <section className="h-auto w-full my-10">
      <h2 className="text-3xl text-white font-bold my-10 ml-10">
        Explore Anime
      </h2>
      <section className="px-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((anime) => (
          <Card key={anime.id} anime={anime} />
        ))}
      </section>
    </section>
  );
}
