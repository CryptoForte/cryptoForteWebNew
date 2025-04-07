import BuildCon1 from '../assets/buildcon001.png';
import BuildCon2 from '../assets/buildcon002.png';
import BuildCon3 from '../assets/buildcon003.png';
import BuildCon4 from '../assets/buildcon004.png';
import BuildCon5 from '../assets/buildcon005.png';
import BuildCon6 from '../assets/buildcon006.png';
// import BuildCon7 from '../assets/buildcon007.png';
import BuildCon8 from '../assets/buildcon008.png';
import BuildCon9 from '../assets/buildcon009.png';
import BuildCon10 from '../assets/buildcon010.png';

const HomePageGallery = () => {
    const imgList = [
        { id: 1, img: BuildCon1, alt: "Construction project 1" },
        { id: 2, img: BuildCon2, alt: "Construction project 2" },
        { id: 3, img: BuildCon3, alt: "Construction project 3" },
        { id: 4, img: BuildCon4, alt: "Construction project 4" },
        { id: 5, img: BuildCon5, alt: "Construction project 5" },
        { id: 6, img: BuildCon6, alt: "Construction project 6" },
        { id: 8, img: BuildCon8, alt: "Construction project 8" }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Gallery Title - optional */}
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800"></h2>

                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {[BuildCon1, BuildCon2, BuildCon3, BuildCon4, BuildCon5, BuildCon6, BuildCon8, BuildCon9, BuildCon10].map((img, i) => (
                    <div key={i} className="mb-4 break-inside-avoid">
                    <img 
                        src={img} 
                        alt="BuildCon Events" 
                        className={`w-full object-cover ${i % 3 === 0 ? 'h-64' : i % 2 === 0 ? 'h-80' : 'h-96'}`}
                    />
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default HomePageGallery;