import { Link } from "react-router-dom";

const EstateCard = ({estate}) => {

	const {image_url, estate_title, location, price, facilities, id} = estate;
    
    return (
        <div>
            <Link to={`/details/${id}`} className="flex hover:scale-105 rounded-xl shadow-2xl flex-col dark:bg-gray-50">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image_url} />
				<div className="flex flex-col flex-1 p-6">
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{estate_title}</h3>
					<p className="text-xs tracking-wider uppercase dark:text-violet-600">{location}</p>
					<div className="mt-2">
					<span>{price}</span>
					</div>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span>{
						facilities.map((item, index) => {
							return <ul key={index}><li className="list-disc">{item}</li></ul>
						})
						}</span>
						<Link to={`/details/${id}`}><button className="btn bg-[#0dcdbd] text-white">View Property</button></Link>
					</div>
				</div>
			</Link>
        </div>
    );
};

export default EstateCard;