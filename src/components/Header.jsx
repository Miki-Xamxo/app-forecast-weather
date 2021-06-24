import React from 'react'


const Header = () => {

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__content'>
                    <div className='logo'>
                        <span>Прогноз Погоды</span>
                    </div>
                    <div className='search'>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header