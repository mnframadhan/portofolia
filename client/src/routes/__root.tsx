import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

const navigationItems = {title: "Portofolia.id", navigation : ["Eksplor", "Tentang Kami"]}
const footerItems = {title: "Portofolia.id", contacts: [ "WhatsApp", "Instagram", "Facebook", "Email"], address: "Jl. Nginden Baru III, Kota Surabaya, Indonesia"}

export const Route = createRootRoute({
  component: () => (
    <>
        <Navbar title={navigationItems.title} items={navigationItems.navigation} />
        <Outlet />
        <Footer title={footerItems.title} contacts={footerItems.contacts} address={footerItems.address} /> 
    </>
  ),
})