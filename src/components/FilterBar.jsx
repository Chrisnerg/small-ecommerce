

export default function FilterBar() {
    return (
        <div>
            <ul className="flex items-center font-semibold">
                <li className="flex-1 text-center py-3 hover:bg-gray-200 cursor-pointer transition-colors duration-200">
                    New In
                </li>
                <li className="flex-1 text-center py-3 hover:bg-gray-200 cursor-pointer transition-colors duration-200">
                    Best Sellers
                </li>
                <li className="flex-1 text-center py-3 hover:bg-gray-200 cursor-pointer transition-colors duration-200">
                    On Sale
                </li>
                <li className="flex-1 text-center py-3 hover:bg-gray-200 cursor-pointer transition-colors duration-200">
                    Clearance
                </li>
                <li className="flex-1 text-center py-3 hover:bg-gray-200 cursor-pointer transition-colors duration-200">
                    Featured
                </li>
                <li className="flex-1 text-center py-3 hover:bg-gray-200 cursor-pointer transition-colors duration-200">
                    Awesome4Less
                </li>
            </ul>
        </div>
    )
}