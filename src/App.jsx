import NavigationBar from './components/NavigationBar';
import FilterBar from './components/FilterBar';
import HeroSection from "./components/HeroSection.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen">
        <NavigationBar />
      {/*Main Content*/}
      <div className="max-w-7xl mx-auto">

        {/*Filter Section*/}
        <div className="mt-6 bg-gray-100">
          <FilterBar />
        </div>

        {/*Image hero*/}
        <HeroSection />
      </div>

      {/*Products*/}
      <div className="mt-6 min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <ProductCard />
        </div>
      </div>

    {/*Footer*/}
    <Footer />
    </div>
  )
}