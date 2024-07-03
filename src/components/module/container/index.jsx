import clsx from "clsx";
import images from "../../image/imageGalery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { formatIDR } from "../../../utils/formatIDR";
import Button from "../../base/Button";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Container = ({ title, className }) => {
  const [buyNow, setBuyNow] = useState(null);
  const [slideShow, setSlideShow] = useState(6);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (isDesktop) {
      setSlideShow(6);
    } else if (isTablet) {
      setSlideShow(4);
    } else if (isMobile) {
      setSlideShow(2);
    }
  }, [isDesktop, isTablet, isMobile]);
  const handleHoverBuyNow = (id) => {
    setBuyNow(id);
  };
  const books = [
    {
      image: images?.dummyBook,
      title: "Elemental Oracle",
      author: "Mathews, Jhon",
      price: 200000,
      discount: 0.03,
    },
    {
      image: images?.dummyBook,
      title: "Elemental Oracle",
      author: "Mathews, Jhon",
      price: 200000,
      discount: 0.4,
    },
    {
      image: images?.dummyBook,
      title: "Elemental Oracle",
      author: "Mathews, Jhon",
      price: 200000,
      discount: 0.12,
    },
    {
      image: images?.dummyBook,
      title: "Elemental Oracle",
      author: "Mathews, Jhon",
      price: 200000,
      discount: 0.05,
    },
    {
      image: images?.dummyBook,
      title: "Elemental Oracle",
      author: "Mathews, Jhon",
      price: 200000,
      discount: 0.05,
    },
    {
      image: images?.dummyBook,
      title: "Elemental Oracle",
      author: "Mathews, Jhon",
      price: 200000,
      discount: 0.05,
    },
  ];
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    centerMode: true,
    cssEase: "linear",
    centerPadding: "0px",
  };
  return (
    <main className="font-poppins">
      <div
        className={clsx(
          "flex justify-center items-center mx-auto w-2/3 text-center font-semibold xl:font-bold text-xl xl:text-4xl",
          className
        )}
      >
        {title}
      </div>
      <div className="h-0.5 w-[50px] xl:w-20 bg-main-red mx-auto my-4"></div>
      <div className="max-w-screen overflow-hidden relative">
        <Slider {...settings}>
          {/* disesuaikan dengan data dari backend */}
          {books.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col py-3 px-5 cursor-pointer"
              onMouseEnter={() => handleHoverBuyNow(idx)}
              onMouseLeave={() => setBuyNow(null)}
            >
              <img
                key={idx}
                className="object-cover max-h-32rounded min-w-1/2 mx-auto"
                src={item?.image}
              />
              <div className="bg-main-red h-4 w-2/3 px-2 my-1 rounded-r-full text-white text-xs font-semibold">
                <small>Fast Delivery</small>
              </div>
              <small>{item?.title}</small>
              <div className="flex flex-col gap-y-1 my-2">
                <p className="text-blue-400 text-xs">{item?.author}</p>
                <small className="text-gray-400 text-xs">Paperback</small>
              </div>
              {/* final price after discount */}
              <p className="font-semibold">
                {formatIDR(item?.price * (1 - item?.discount))}
              </p>
              {/* final price after discount */}

              <div className="flex">
                <small className="bg-orange-200 text-main-red px-1 rounded-md text-xs">
                  -{item?.discount * 100}%
                </small>
                <small className="text-gray-400 px-1 rounded-md text-xs line-through">
                  {formatIDR(item?.price)}
                </small>
              </div>
              <div className="overflow-y-hidden my-3 pl-3 pr-5  ">
                <div
                  className={`${
                    buyNow === idx
                      ? "translate-y-0 transition-transform duration-500"
                      : "translate-y-full transition-transform duration-200"
                  } flex justify-between items-center`}
                >
                  <p className="text-main-red text-xs ">Buy now</p>
                  <div className="flex gap-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* disesuaikan dengan dari backend */}
        </Slider>
      </div>
      <div className="flex justify-center">
        <Button
          className={
            "mx-auto text-white rounded-full hover:animate-colorTransition hover:bg-orange-400"
          }
        >
          View More
        </Button>
      </div>
    </main>
  );
};
export default Container;
