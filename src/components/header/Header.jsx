import { useState } from "react";
import FavoriteLocations from "./FavoriteLocations";
import FavoriteLocationsModal from "./FavoriteLocationsModal";
import Logo from "./Logo";
import Search from "./Search";


export default function Header() {
	const [isShowModal, setIsShowModal] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
		<nav className="container flex gap-4 items-center justify-between py-6">
			<Logo/>
			<div className="flex items-center gap-4 relative">
				<Search />
				<FavoriteLocations onShow={() => setIsShowModal(!isShowModal)} />
				{isShowModal && <FavoriteLocationsModal />}
			</div>
		</nav>
	</header>
  )
}
