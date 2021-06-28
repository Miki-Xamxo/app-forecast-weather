import React from "react"
import { useSelector, useDispatch} from "react-redux"
import { setVisiblePopup } from "../redux/actions/cities"

const ListPopup = ({  onClickSearchCity }) => {

    const {city} = useSelector(({ cities }) => cities)
    const dispatch = useDispatch()

    const handleSearchCity = (city) => {
        onClickSearchCity(city)
        dispatch(setVisiblePopup(false))
    }

    // const handleOutsideClick = event => {
    //     const path = event.path || (event.composedPath && event.composedPath())
    //     if(!path.includes(listRef.current)){
    //         dispatch(setVisiblePopup(false))
    //     }
    //     console.log(path)
    // }

    // React.useEffect(() => {
    //     document.body.addEventListener('click', handleOutsideClick)
    // }, [])

    return (
        <div  className='list-city'>
            <ul>
                {
                    city.map(elem => <li onClick={() => handleSearchCity(elem.name)} key={elem.id}>{elem.name}</li> )
                }
            </ul>
        </div>
    )
}

export default ListPopup