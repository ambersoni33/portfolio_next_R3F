import { CanvasHero } from "./components/CanvasHero";

const Home = ()=>{
    return(
        <div className="h-screen w-full absolute top-0 left-0 -z-10">
            <CanvasHero />
        </div>
    )
}
export default Home;