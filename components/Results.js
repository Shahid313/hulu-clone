import Thumbnails from "./Thumbnails";

const movies = [
    {
        "id":"1",
        "title":"The Toy",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie1.jpg",
        "date":"1990-10-3"
    },{
        "id":"2",
        "title":"Joker",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie2.jpg",
        "date":"1990-10-3"
    },{
        "id":"3",
        "title":"Neo",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie3.jpg",
        "date":"1990-10-3"
    },{
        "id":"4",
        "title":"The Peter Rabbit",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie4.jpg",
        "date":"1990-10-3"
    },{
        "id":"5",
        "title":"The Peter Rabbit",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie5.jpg",
        "date":"1990-10-3"
    },{
        "id":"6",
        "title":"The Peter Rabbit",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie6.jpg",
        "date":"1990-10-3"
    },{
        "id":"7",
        "title":"The Peter Rabbit",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie7.jpg",
        "date":"1990-10-3"
    },{
        "id":"8",
        "title":"The Peter Rabbit",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie8.jpg",
        "date":"1990-10-3"
    },{
        "id":"9",
        "title":"The Peter Rabbit",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie9.jpg",
        "date":"1990-10-3"
    },{
        "id":"10",
        "title":"The Peter Rabbit",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie10.jpg",
        "date":"1990-10-3"
    },{
        "id":"11",
        "title":"Bolt",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie11.jpg",
        "date":"1990-10-3"
    },{
        "id":"12",
        "title":"Cendralla",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie12.jpg",
        "date":"1990-10-3"
    },{
        "id":"13",
        "title":"Tom And Jerry",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie13.jpg",
        "date":"1990-10-3"
    },{
        "id":"14",
        "title":"Clara",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie14.jpg",
        "date":"1990-10-3"
    },{
        "id":"15",
        "title":"Brave",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie15.jpg",
        "date":"1990-10-3"
    },{
        "id":"16",
        "title":"Brave",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie16.jpg",
        "date":"1990-10-3"
    },{
        "id":"17",
        "title":"Aladin",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie17.jpg",
        "date":"1990-10-3"
    },{
        "id":"18",
        "title":"Up",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie18.jpg",
        "date":"1990-10-3"
    },{
        "id":"19",
        "title":"Rio",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie19.jpg",
        "date":"1990-10-3"
    },{
        "id":"20",
        "title":"Brave",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie20.jpg",
        "date":"1990-10-3"
    },{
        "id":"21",
        "title":"Brave",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie21.jpg",
        "date":"1990-10-3"
    },{
        "id":"22",
        "title":"Brave",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie22.jpg",
        "date":"1990-10-3"
    },{
        "id":"23",
        "title":"Brave",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie23.jpg",
        "date":"1990-10-3"
    },{
        "id":"24",
        "title":"Brave",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie24.jpg",
        "date":"1990-10-3"
    },{
        "id":"25",
        "title":"Brave",
        "overview":"Whether you plan on writing a film synopsis for a script thats done and dusted or is yet to be written, being able to refine a story down to 400 or so words is an invaluable skill to acquire.",
        "image":"/Movies/movie25.jpg",
        "date":"1990-10-3"
    },
]

function Results(){
    return(
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {movies.map((movie) => (
                <Thumbnails image={movie.image} title={movie.title} overview={movie.overview} date={movie.date}/>
            ))}
            
        </div>
    )
}

export default Results;