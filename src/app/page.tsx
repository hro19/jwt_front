import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute ">
        <Image
          className=""
          src="/logo.png"
          alt="フォームロゴ"
          width={180}
          height={37}
          priority
        />
      </div>

    </main>
  );
}
