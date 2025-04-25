import './leftBar.css';

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className="menuIcons">
                <a href="/" className='menuIcon'>
                    <img src="/general/logo.png" alt="로고" className="logo" />
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/general/home.svg" alt="홈" />
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/general/create.svg" alt="만들기" />
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/general/updates.svg" alt="수정" />
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/general/messages.svg" alt="메시지" />
                </a>
            </div>
            <a href="/" className='menuIcon'>
                <img src="/general/messages.svg" alt="" />
            </a>
        </div>
    )
}

export default LeftBar