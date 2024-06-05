type PostI = {
  title: String;
  content: String;
};

export default function Post({ title, content }: PostI) {
  return (
    <div className="flex flex-col rounded-md border-2 border-white mb-5">
      <h1>{title}</h1>

      <p>{content}</p>
    </div>
  );
}
