/* eslint-disable react/prop-types */
import HeartIcon from "../../assets/heart.svg"

export default function FavoriteLocations({onShow}) {
    return (
        <div 
            className="py-2 px-3 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all backdrop-blur-md bg-gray-200/10"
            onClick={onShow}
        >
            <img src={HeartIcon} alt="" />
            <span>Favorite Locations</span>
        </div>
    )
}
