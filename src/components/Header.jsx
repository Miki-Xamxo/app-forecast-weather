import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'

import searchSvg from '../assets/search.svg'
import deleteSvg from '../assets/delete.svg'

import { setInputValue } from '../redux/actions/input-value'
import { getCities, setVisiblePopup } from '../redux/actions/cities'


const Header = () => {

    const value = useSelector(({ inputValue}) => inputValue.value)
    const dispatch = useDispatch()

    const debounceSearchCity = debounce((value) => dispatch(getCities(value)), 1000)

    const handleChangeValue = (e) => {
        let value = e.target.value
        dispatch(setInputValue(value))
        debounceSearchCity(value)
        dispatch(setVisiblePopup(true))
    }

    const onClickDelete = () => {
        dispatch(setInputValue(''))
    }


    return (
        <header className='header'>
            <div className='container'>
                <div className='header__content'>
                    <div className='logo'>
                        <span>Прогноз Погоды</span>
                    </div>
                    <div className='form-search'>
                        <form className='search'>
                            <input type="text" value={value} placeholder='Город или район' onChange={handleChangeValue}/>
                            <div className='icon'>
                                {
                                    !value 
                                    ? <img src={searchSvg} alt="" />
                                    : <img onClick={onClickDelete} src={deleteSvg} alt="" />
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header