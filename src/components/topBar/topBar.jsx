import './topBar.css';
import UserButton from '../userButton/userButton.jsx';

const TopBar = () => {
    return (
        <div className='topBar'>
            {/* SEARCH */}
            <div className="search">
                <img src="/general/search.svg" alt="검색 돋보기" />
                <input type="text" placeholder='검색' />
            </div>
            {/* USER */}
            <UserButton />
        </div>
    )
}

export default TopBar