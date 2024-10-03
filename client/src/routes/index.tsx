import { createFileRoute } from '@tanstack/react-router';
import { Jumbotron } from "@/components/jumbotron" ;
import { Hero } from "@/components/hero";
import { AppIntro } from "@/components/app-intro";
import { Intro } from '@/components/intro';
import { useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: LandingPage
})


export function LandingPage() {

  const fetchingTest = async () => {

    const apiURL : string = import.meta.env.VITE_API_URL as string;
    console.log(apiURL);
  
    const response = await fetch(`${apiURL}/api/testusers`, {headers: {'Content-Type': 'application/json'}, method: 'GET'});
    const data = await response.json();
    
    console.log(data);
  
  }
  
  useEffect(() => {
    fetchingTest();
  }, [])

  return (
    <>
      <Jumbotron title='Tampilkan Karya Terbaikmu' sub_title='Karya terbaik untuk dunia yang lebih baik, perlihatkan kepada semuanya!' />
      <Intro title='Apa pentingnya membangun portofolio?' description='Menampilkan karya ke publik penting untuk membangun kredibilitas, mendapatkan umpan balik, dan membuka peluang kolaborasi, sekaligus mendorong pertumbuhan pribadi dan profesional.' />
      <main className='flex flex-col justify-center items-center bg-center bg-gray-100'>
        <AppIntro title='Tampilkan Karya' button_name='Klaim Halaman' description='Menampilkan karya secara publik membuka peluang besar untuk dilirik. Kamu telah bekerja keras untuk menghasilkan sebuah karya jangan dipendam saja!'/>
        <AppIntro title='Ceritakan Kisah Sukses' description="Tidak perlu malu atau minder, fakta pahit adalah bahwa tidak semua orang senang melihat kamu berkarya. Justru orang yang menghujat itu 'tidak lebih baik' daripada dirimu"/>
        <AppIntro title='Terbukalah untuk Kolaborasi' description="Jangan ragu untuk berkolaborasi, ingat! kamu tidak bisa sepenuhnya berkarya sendirian. Terbukalah untuk kolaborasi. Bahkan kamu perlu mencarinya!"/>
      </main>
      <Hero />
    </>
  )
}

