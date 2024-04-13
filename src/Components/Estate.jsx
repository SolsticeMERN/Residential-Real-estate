import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";

const Estate = () => {

    const [estates, setEstate] = useState([]);

    useEffect(() => {
        fetch('/public/estate.json')
        .then(res => res.json())
        .then(data => setEstate(data))
    }, [])

    return (
        <section className="py-6 sm:py-12 mt-10 rounded-2xl dark:bg-gray-100 dark:text-gray-800">
	<div className="container px-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50"className="text-3xl text-[#0dcdbd] font-bold">Estate Listings</h2>
		</div>
		<div className="grid grid-cols-1  gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			{
                estates.map((estate, index) => <EstateCard key={index} estate={estate}></EstateCard>)
            }
		</div>
	</div>
</section>
    );
};

export default Estate;