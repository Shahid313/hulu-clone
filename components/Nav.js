const categories = [
    {
        "id":"1",
        "title":"Trending"
    },{
        "id":"2",
        "title":"Comedy"
    },{
        "id":"3",
        "title":"Top Rated"
    },{
        "id":"4",
        "title":"Action"
    },{
        "id":"5",
        "title":"Horror"
    },{
        "id":"6",
        "title":"Romance"
    },{
        "id":"7",
        "title":"Mystery"
    },{
        "id":"8",
        "title":"Sci-Fi"
    },{
        "id":"9",
        "title":"Western"
    },{
        "id":"10",
        "title":"Animation"
    },{
        "id":"11",
        "title":"TV Movie"
    },
]

//After overflow-x-scroll if we want to give some padding to the right of the last child element so, we can achive this by
//giving the property to the child element last:pr-24

function Nav(){
    return(
        <nav className="relative">
            <div className="flex px-10 sm:px-20 whitespace-nowrap text-2xl space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {categories.map((cat) => (
                    <p key={cat.id} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500">{cat.title}</p>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-l from-[#06202A] h-10 w-1/12"/>
        </nav>
    )
}

export default Nav;