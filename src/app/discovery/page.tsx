const mockItems = [
  {
    id: 12345,
    title: "Title",
    artist: "Artist",
    release: "Release",
    year: "1990",
  },
  {
    id: 12345,
    title: "Title",
    artist: "Artist",
    release: "Release",
    year: "1990",
  },
  {
    id: 12345,
    title: "Title",
    artist: "Artist",
    release: "Release",
    year: "1990",
  },
];

export default function Discovery() {
  return (
    <>
      {mockItems.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
          </div>
        );
      })}
    </>
  );
}
