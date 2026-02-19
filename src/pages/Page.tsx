type PageProps = {
  title: string;
};

export default function Page({ title }: PageProps) {
  return (
    <main className="flex items-center justify-center min-h-screen pt-16">
      <h1 className="font-serif text-4xl italic font-light">{title}</h1>
    </main>
  );
}
