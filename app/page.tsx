const posts = [
  { slug: "chao-the-gioi", title: "Chào thế giới" },
  { slug: "vibe-code-la-gi", title: "Vibe code là gì?" },
  { slug: "deploy-dau-tien", title: "Deploy đầu tiên" },
];

export default function Home() {
  const soBai = posts.length;

  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Simple CMS – Blog vibe code</h1>
      <p className="mt-2 text-zinc-500">{soBai} bài viết</p>
      <ul className="mt-8 space-y-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`} className="text-lg hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
