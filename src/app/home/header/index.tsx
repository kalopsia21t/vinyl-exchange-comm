import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="flex justify-between w-screen border-b-2 border-white">
      <h1 className="flex-inline self-center ml-4">VinylComm.ua</h1>
      <div className="flex self-center mr-4">
        <Navigation />
      </div>
    </header>
  );
}
