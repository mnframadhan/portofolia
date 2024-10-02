import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/eksplor")({
    component: Explore,
});

export function Explore() {

    // assume logged in
    const username = "Ucup";


    return (
    
    <section>
        <h1>Welcome, {username}</h1>
        
    </section>)
}
