import adBanner1 from "@/assets/Addvertise/add1.png"
import adBanner2 from "@/assets/Addvertise/add2.png"
import bgCloud from "@/assets/Addvertise/bgcloud.png"

const Addvertise = () => {
    return (
        <div className="max-w-[1240px] mx-auto flex gap-5 my-5">
            <div className="px-[140px] py-20 w-1/2" style={{backgroundImage:`url(${adBanner1.src})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="px-[58px] py-[48px] flex justify-center items-center" style={{backgroundImage:`url(${bgCloud.src})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <span className="text-[#1096B5] font-extrabold text-2xl">
                        Discover the <br/> Joy of Play
                    </span>
                </div>
            </div>
            <div className="w-1/2 flex justify-end" style={{backgroundImage:`url(${adBanner2.src})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="w-[331px] mt-16 mr-10">
                    <h1 className="text-3xl text-[#1096B5] font-extrabold">Play, learn, & grow!</h1>
                    <p className="mt-2 mb-8 text-[#375259] text-base font-bold w-[331px]">Flash sale 30%, Extra discount for loyal customers</p>
                    <button className="bg-[#FFE926] rounded-[74px] px-[14px] py-3 text-base font-bold">
                        Shop now 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Addvertise;