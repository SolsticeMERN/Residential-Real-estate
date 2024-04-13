const Agents = () => {
    return (
        <div>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-10">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="text-center text-5xl text-[#0dcdbd] p-10 font-bold">
                Our Agents
            </div>
    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-10">
        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="50"
            className="border-r hover:scale-105 shadow-2xl border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://demo.graygrids.com/themes/estatebit/assets/img/team/team-01.jpg" className="w-full mb-3"/>
            <div className="p-4 pt-2 text-center">
                <div className="mb-2">
                    <span href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">David Givens</span>
                </div>
                <div>
                    <p>Real Estate Agent</p>
                </div>
            </div>
        </div>
        <div data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100"
            className="border-r hover:scale-105 shadow-2xl border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://demo.graygrids.com/themes/estatebit/assets/img/team/team-02.jpg" className="w-full mb-3"/>
            <div className="p-4 pt-2 text-center">
                <div className="mb-2">
                    <span href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">John Doe</span>
                </div>
                <div>
                    <p>Real Estate Agent</p>
                </div>
            </div>
        </div>
        <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="50"
            className="border-r hover:scale-105 shadow-2xl border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://demo.graygrids.com/themes/estatebit/assets/img/team/team-03.jpg" className="w-full mb-3"/>
            <div className="p-4 pt-2 text-center">
                <div className="mb-2">
                    <span href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">Darrell S.Allen</span>
                </div>
                <div>
                    <p>Real Estate Agent</p>
                </div>
            </div>
        </div>
        <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="100"
            className="border-r hover:scale-105 shadow-2xl border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <img src="https://demo.graygrids.com/themes/estatebit/assets/img/team/team-04.jpg" className="w-full mb-3"/>
            <div className="p-4 pt-2 text-center">
                <div className="mb-2">
                    <span href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">Justyna Michallek</span>
                </div>
                <div>
                    <p>Real Estate Agent</p>
                </div>
            </div>
        </div>


    </div>
</div>
        </div>
    );
};

export default Agents;