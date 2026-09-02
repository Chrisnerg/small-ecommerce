export default function FilterBar() {
  return (
    <div>
      <ul className="flex items-center font-semibold">
        <li className="flex-1 cursor-pointer py-3 text-center transition-colors duration-200 hover:bg-gray-200">
          New In
        </li>
        <li className="flex-1 cursor-pointer py-3 text-center transition-colors duration-200 hover:bg-gray-200">
          Best Sellers
        </li>
        <li className="flex-1 cursor-pointer py-3 text-center transition-colors duration-200 hover:bg-gray-200">
          On Sale
        </li>
        <li className="flex-1 cursor-pointer py-3 text-center transition-colors duration-200 hover:bg-gray-200">
          Clearance
        </li>
        <li className="flex-1 cursor-pointer py-3 text-center transition-colors duration-200 hover:bg-gray-200">
          Featured
        </li>
        <li className="flex-1 cursor-pointer py-3 text-center transition-colors duration-200 hover:bg-gray-200">
          Awesome4Less
        </li>
      </ul>
    </div>
  );
}
