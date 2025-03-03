const Giscus = dynamic(() => import('@/app/giscus').then((m) => m.Comment), {
    ssr: false,
  })
  
  export default function Home() {
    return (
      <main>
        <Giscus />
      </main>
    )
  }