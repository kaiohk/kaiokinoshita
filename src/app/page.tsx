export default function Home() {
  return (
    <div className="bg-white font-noto-serif selection:bg-primary selection:text-white">
      <div className="p-30 flex flex-col">
        <h1 className="text-primary text-5xl">kaio kinoshita</h1>
        <span className="text-4xl text-secondary">
          creating enjoyable interfaces
        </span>
        <span className="flex text-4xl text-secondary">
          in a complex world.
        </span>
        <a
          className="w-max text-3xl text-primary mt-10 mx-1 underline"
          href="/about"
        >
          read more.
        </a>
      </div>
    </div>
  );
}
