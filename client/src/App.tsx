import { Navbar } from "./components/navbar"
import { Jumbotron } from "./components/jumbotron"
import { Hero } from "./components/hero"
import { AppIntro } from "./components/app-intro"
import { MainAdvantages } from "./components/main-advantages"
import { Footer } from "./components/footer"

const navigationItems = {title: "Portofolia.id", navigation : ["Eksplor", "Tentang Kami"]}
const footerItems = {title: "Portofolia.id", contacts: [ "WhatsApp", "Instagram", "Facebook", "Email"], address: "Jl. Nginden Baru III, Kota Surabaya, Indonesia"}

function App() {

  return (
    <>
      <Navbar title={navigationItems.title} items={navigationItems.navigation} />
      <Jumbotron />
      <Hero />
      <AppIntro />
      <MainAdvantages />
      <Footer title={footerItems.title} contacts={footerItems.contacts} address={footerItems.address} /> 
    </>
  )
}

export default App
