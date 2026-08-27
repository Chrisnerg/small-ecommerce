

export default function ProductCard() {
    return (
        <div>
            {/*Clearance Sale*/}
            <div className="p-4">
                <h3 className="text-2xl text-gray-600 font-semibold my-4">Clearance Sale</h3>
                <div>
                    <ul className="flex items-stretch gap-x-4 font-semibold">

                        {/*Product 1*/}
                        <li className="flex-1 flex flex-col gap-3 p-4 bg-white">
                            <img
                                src="https://media.takealot.com/covers_images/b3a7047efab647e590edb04b56d20884/s-zoom.file"
                                alt="Product 1"
                                className="rounded-md w-full h-64 object-contain"
                            />
                            <p className="min-h-12">Philips 1000 Series NA130/00 6.2L Analog Airfryer - Black</p>
                            <p>R 749</p>
                            <button type="button" className="mt-auto px-4 py-2 bg-black text-white rounded-md transition active:translate-y-1">
                                Add to Cart
                            </button>
                        </li>

                        {/*Product 2*/}
                        <li className="flex-1 flex flex-col gap-3 p-4 bg-white">
                            <img
                                src="https://media.takealot.com/covers_images/1cce71f484d148eba29f5ecf11f846f1/s-zoom.file"
                                alt="Product 2"
                                className="rounded-md w-full h-64 object-contain"
                            />
                            <p className="min-h-12">Philips Essentials Collection 1000 Series 1.7L Kettle</p>
                            <p>R 569</p>
                            <button type="button" className="mt-auto px-4 py-2 bg-black text-white rounded-md transition active:translate-y-1">
                                Add to Cart
                            </button>
                        </li>

                        {/*Product 3*/}
                        <li className="flex-1 flex flex-col gap-3 p-4 bg-white">
                            <img
                                src="https://media.takealot.com/covers_tsins/61029845/61029845-1-zoom.jpeg"
                                alt="Product 3"
                                className="rounded-md w-full h-64 object-contain"
                            />
                            <p className="min-h-12">Vortex Diamondback HD 10x42 Binoculars - DB-215</p>
                            <p>R 6,679</p>
                            <button type="button" className="mt-auto px-4 py-2 bg-black text-white rounded-md transition active:translate-y-1">
                                Add to Cart
                            </button>
                        </li>

                        {/*Product 4*/}
                        <li className="flex-1 flex flex-col gap-3 p-4 bg-white">
                            <img
                                src="https://media.takealot.com/covers_images/20820049c0064890a089e6dac9dcab57/s-zoom.file"
                                alt="Product 4"
                                className="rounded-md w-full h-64 object-contain"
                            />
                            <p className="min-h-12">Garmin Forerunner 70, GPS, Black</p>
                            <p>R 4,999</p>
                            <button type="button" className="mt-auto px-4 py-2 bg-black text-white rounded-md transition active:translate-y-1">
                                Add to Cart
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/*Winter Specials*/}
            <div className="p-4 ">
                <h3 className="text-2xl text-gray-600 font-semibold my-4">Post Winter Specials</h3>
                <div>
                    <ul className="flex items-stretch gap-x-4 font-semibold">
                        {/*Product 1*/}
                        <li className="flex-1 flex flex-col gap-3 p-4 bg-white">
                            <img
                                src="https://media.takealot.com/covers_images/3eefc96a817a4810b22334b5e0923755/s-zoom.file"
                                alt="Post Winter Special"
                                className="rounded-md w-full h-64 object-contain"
                            />
                            <p className="min-h-12">Haier 514L Side by Side Fridge Freezer Silver Frost-Free A+ HRF-668VNFMBL</p>
                            <p>R 11,999</p>
                            <button type="button" className="mt-auto px-4 py-2 bg-black text-white rounded-md transition active:translate-y-1">Add to Cart</button>
                        </li>

                        {/*Product 2*/}
                        <li className="flex-1 flex flex-col gap-3 p-4 bg-white">
                            <img
                                src="https://media.takealot.com/covers_images/23733e7d60134e58b11b1613b9e06e25/s-zoom.file"
                                alt="Product 2"
                                className="rounded-md w-full h-64 object-contain"
                            />
                            <p className="min-h-12">Philips Evnia 23.8" FHD IPS 144Hz Gaming Monitor - 24M2N2100NF</p>
                            <p>R 1 899</p>
                            <button type="button" className="mt-auto px-4 py-2 bg-black text-white rounded-md transition active:translate-y-1">Add to Cart</button>
                        </li>

                        {/*Product 3*/}
                        <li className="flex-1 flex flex-col gap-3 p-4 bg-white">
                            <img
                                src="https://media.takealot.com/covers_images/30e29ec6495c49e8b1c0e7181f9e2421/s-zoom.file"
                                alt="Product 3"
                                className="rounded-md w-full h-64 object-contain"
                            />
                            <p className="min-h-12">Portable Charging RGB Wireless Mute Mouse</p>
                            <p>R 199</p>
                            <button type="button" className="mt-auto px-4 py-2 bg-black text-white rounded-md transition active:translate-y-1">Add to Cart</button>
                        </li>

                        {/*Product 4*/}
                        <li className="flex-1 flex flex-col gap-3 p-4 bg-white">
                            <img
                                src="https://media.takealot.com/covers_images/852be41ec3be4e82b8a415d0ae9a7b82/s-zoom.file"
                                alt="Product 4"
                                className="rounded-md w-full h-64 object-contain"
                            />
                            <p className="min-h-12">Samsung 55" 4K Ultra HD Smart TV - UE55AU7000</p>
                            <p>R 14,999</p>
                            <button type="button" className="mt-auto px-4 py-2 bg-black text-white rounded-md transition active:translate-y-1">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}