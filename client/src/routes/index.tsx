import { createFileRoute } from '@tanstack/react-router';
import { Jumbotron } from "@/components/jumbotron" ;
import { Hero } from "@/components/hero";
import { AppIntro } from "@/components/app-intro";
import { Intro } from '@/components/intro';

export const Route = createFileRoute('/')({
  component: LandingPage
})


export function LandingPage() {

  return (
    <>
      <Jumbotron title='Tampilkan Karya Terbaikmu' sub_title='Karya terbaik untuk dunia yang lebih baik, perlihatkan kepada semuanya!' />
      <Intro title='Apa pentingnya membangun portofolio?' description='Menampilkan karya ke publik penting untuk membangun kredibilitas, mendapatkan umpan balik, dan membuka peluang kolaborasi, sekaligus mendorong pertumbuhan pribadi dan profesional.' />
		<main className="flex flex-col py-12 justify-center items-center bg-center bg-gray-100 bg-[url('background/cloudy-purple-potrait.jpg')]">
        <AppIntro title='Tampilkan Karya' button_name='Klaim Halaman' description='Menampilkan karya secara publik membuka peluang besar untuk dilirik. Kamu telah bekerja keras untuk menghasilkan sebuah karya jangan dipendam saja!'/>
        <AppIntro title='Ceritakan Kisah Sukses' description="Tidak perlu malu atau minder, fakta pahit adalah bahwa tidak semua orang senang melihat kamu berkarya. Justru orang yang menghujat itu 'tidak lebih baik' daripada dirimu"/>
        <AppIntro title='Terbukalah untuk Kolaborasi' description="Jangan ragu untuk berkolaborasi, ingat! kamu tidak bisa sepenuhnya berkarya sendirian. Terbukalah untuk kolaborasi. Bahkan kamu perlu mencarinya!"/>
      </main>
      <Hero />
    </>
  )
}

