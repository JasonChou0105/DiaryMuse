import Slider from "./Slider"

const Navbar = () => {
    return (
        <div className="w-full flex flex-row justify-between items-center bg-stone-800 rounded-b-lg py-6 px-12">
            <div className="text-2xl text-white font-bold">Scawy</div>
            <Slider/>
        </div>
    )
}    

export default Navbar