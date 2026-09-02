import NavigationBar from "../components/NavigationBar";
import FilterBar from "../components/FilterBar";
import HeroSection from "../components/HeroSection.jsx";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts.jsx";

export default function HomePage({products}) {
    return (
        <div className="min-h-screen bg-white text-black">
            <NavigationBar />

            {/*Main Content*/}
            <div className="mx-auto max-w-7xl">
                {/*Filter Section*/}
                <div className="mt-6 bg-gray-100">
                    <FilterBar />
                </div>

                {/*Image hero*/}
                <HeroSection />
            </div>

            {/*Products*/}
            <div className="mt-6 min-h-screen bg-gray-100">
                <div className="">
                    <FeaturedProducts
                        featuredTittle="Clearance Sale"
                        startIndex={0}
                        endIndex={4}
                        products={products}
                    />
                </div>

                <div className="">
                    <FeaturedProducts
                        featuredTittle="New Arrivals"
                        startIndex={4}
                        endIndex={8}
                        products={products}
                    />
                </div>
            </div>

            {/*Footer*/}
            <Footer />
        </div>
    )
}