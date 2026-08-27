import { CgProfile } from "react-icons/cg";
import { SlBasket } from "react-icons/sl";

export default function NavigationBar() {
    return (
        <div>
            {/*Navigation Bar*/}
            <nav className="flex justify-between items-center text-black shadow rounded-2xl bg-white">
                {/*Left Side of Navigation bar*/}
                <div className="flex">
                    <img
                        src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?resize=400x0"
                        alt="Logo Image"
                        className="w-20 h-20 object-contain"
                    />
                </div>

                {/*Center*/}
                <h2 className="text-2xl [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
                    The Awesome Store
                </h2>

                {/*Right Side*/}
                <div className="flex items-center gap-4">
                    <CgProfile className="text-2xl" />
                    <SlBasket className="mr-4 text-2xl" />
                </div>
            </nav>
        </div>
    )
}