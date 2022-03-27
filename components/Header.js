import Image from 'next/image'
import HeaderItem from './HeaderItem';
import {
    HomeIcon,
    CollectionIcon,
    BadgeCheckIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

function Header(){
    return(
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='Home' Icon={HomeIcon}/>
                <HeaderItem title='Trending' Icon={LightningBoltIcon}/>
                <HeaderItem title='Verified' Icon={BadgeCheckIcon}/>
                <HeaderItem title='Collection' Icon={CollectionIcon}/>
                <HeaderItem title='Search' Icon={SearchIcon}/>
                <HeaderItem title='Account' Icon={UserIcon}/>
            </div>
            <Image src="/hulu.png"
            className='object-contain ' 
            width="100px" 
            height="50px"/>
        </header>
        //its a pleasure to make your aquaintance sir.
    )
}

export default Header;