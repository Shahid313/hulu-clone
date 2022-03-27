import Image from "next/image";
import {
    ThumbUpIcon
} from '@heroicons/react/outline'

function Thumbnails({image, title, overview, date}){
    return(
        <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image src={image} layout="responsive" height={1080} width={1920}/>
            <div className="p-2">
            <p className="truncate max-w-md">{overview}</p>
            <h2 className="text-white mt-2 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">{title}</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">
            {date}
            <ThumbUpIcon className="h-5 mx-2 cursor-pointer"/> 1234
            </p>
            </div>
            
        </div>
    )
}

export default Thumbnails;