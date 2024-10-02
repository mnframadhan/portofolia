import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Toaster } from '@/components/ui/toaster'
import { createRootRoute, Outlet } from '@tanstack/react-router'

const navigationItems = {title: "Portofolia.id", items : [{item: "Eksplor", navigateTo: "/eksplor"}, {item: "Tentang Kami", navigateTo: '/'}]}
const footerItems = {title: "Portofolia.id", sub_title: "Tampilkan Karya Terbaikmu",  contacts: [ "WhatsApp", "Instagram", "Facebook", "Email"], address: "Jl. Nginden Baru III, Kota Surabaya, Indonesia"}

export const Route = createRootRoute({
  component: () => (
    <>
        <Navbar title={navigationItems.title} items={navigationItems.items} />
        <Outlet />
        <Toaster />
        <Footer title={footerItems.title} sub_title={footerItems.sub_title} contacts={footerItems.contacts} address={footerItems.address} /> 
    </>
  ),
})