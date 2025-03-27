import Image from "next/image";
import Link from "next/link";
const images = [
    {
      src: "/image/premiere.jpg",
      alt: "Image 1",
      title: "Céramique d'argile",
      description:
        "",
      fullText: "",
      width: 800,
      height: 800
    },
    {
      src: "/image/deuxieme.jpg",
      alt: "Image2",
      title: "5 montres passées",
      description:
        "",
      fullText: "",
      width: 800,
      height: 800
    },
    {
      src: "/image/troisieme.jpg",
      alt: "Image3",
      title: "Spécialistes",
      description:
        "",
      fullText: "",
      width: 800,
      height: 800
    },
    {
      src: "/image/troisieme.jpg",
      alt: "Image3",
      title: "Studio Vega",
      description:
        "",
      fullText: " ", 
      width: 800,
      height: 800
    },
    {
      src: "/image/cinquieme.jpg",
      alt: "Image5",
      title: "Menuiserie sacket",
      description:
        "",
      fullText: "",
      width: 800,
      height: 800
    },
    {
      src: "/image/sixieme.jpg",
      alt: "Image6",
      title: "Pépinière Crosby",
      description:
       "",
      fullText: "",
      width: 800,
      height: 800,
    }
  ];
  const Imagegrid= () => {
    return (
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-10">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col items-start transition duration-300 hover:scale-105"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  objectFit="contain"
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4">
                  <h2 className="text-xl text-black text-center mb-2">
                    {image.title}
                  </h2>
                  <p className="text-black font-bold text-center">
                    {image.description}
                  </p>
                  <p className="text-black text-center">
                    {image.fullText}
                  </p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
  export default Imagegrid;