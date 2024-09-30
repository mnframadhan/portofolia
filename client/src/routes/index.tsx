import { createFileRoute } from '@tanstack/react-router'
import { Jumbotron } from "@/components/jumbotron" 
import { Hero } from "@/components/hero"
import { AppIntro } from "@/components/app-intro"
import { MainAdvantages } from "@/components/main-advantages"

export const Route = createFileRoute('/')({
  component: LandingPage
})


export function LandingPage() {

  return (
    <>
      <Jumbotron />
      <Hero />
      <AppIntro />
      <MainAdvantages />
    </>
  )
}

