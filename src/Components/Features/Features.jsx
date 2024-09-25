import feature1 from "../../assets/feature (1).png";
import feature2 from "../../assets/feature (2).png";
import feature3 from "../../assets/feature (3).png";
import feature4 from "../../assets/feature (4).png";
const Features = () => {
    return (
        <div className="w-full h-[270px] bg-[#FAF3EA]">
            <div className="flex items-center justify-evenly mx-auto h-full">
                <div className="w-[20%] flex justify-evenly items-center">
                    <div><img src={feature1} alt="" /></div>
                    <div>
                        <h3 className="text-xl font-medium">High Quality</h3>
                        <p className="text-slate-500 font-medium">crafted from top materials</p>
                    </div>
                </div>
                <div className="w-[20%] flex justify-evenly items-center">
                    <div><img src={feature2} alt="" /></div>
                    <div>
                        <h3 className="text-xl font-medium">Warranty Protection</h3>
                        <p className="text-slate-500 font-medium">crafted from top materials</p>
                    </div>
                </div>
                <div className="w-[20%] flex justify-evenly items-center">
                    <div><img src={feature3} alt="" /></div>
                    <div>
                        <h3 className="text-xl font-medium">Free Shipping</h3>
                        <p className="text-slate-500 font-medium">crafted from top materials</p>
                    </div>
                </div>
                <div className="w-[20%] flex justify-evenly items-center">
                    <div><img src={feature4} alt="" /></div>
                    <div>
                        <h3 className="text-xl font-medium">24/7 Support</h3>
                        <p className="text-slate-500 font-medium">crafted from top materials</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;