import ProductCard from "../components/ProductCard.jsx";

export default function featuredProducts({featuredTittle, startIndex, endIndex, products}) {
    return (
        <div className="max-w-7xl mx-auto p-4">
            {/*Clearance Sale*/}
            <h3 className="my-4 text-2xl font-semibold text-gray-600">
                {featuredTittle}
            </h3>
            <ul className="flex items-stretch gap-x-4 font-semibold">
                {products.slice(startIndex, endIndex).map((product) => (
                    <li className="flex flex-1 flex-col gap-3 bg-white p-4">
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.image}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}