import images from "../../components/image/imageGalery";
import Container from "../../components/module/container";
import Footer from "../../components/module/footer";
import Navbar from "../../components/module/navbar";
import Testimonials from "../../components/module/testimonial";

export default function Home() {
  const listBooks = [
    {
      title: "See The Spirits Speak",
    },
    {
      title: "Bestseller Comic And Manga",
    },
    {
      title: "See The Spirits Speak",
    },
  ];
  return (
    <>
      <Navbar />
      <div
        className="bg-gray-200 py-3"
        style={{
          backgroundImage: `url(${images?.mainBg})`,
          // backgroundRepeat: "no-repeat",
        }}
      >
        {listBooks?.map((item, i) => (
          <div key={i} className="mb-3 py-4 xl:py-8 bg-white xl:max-w-[70%] xl:mx-auto">
            <Container title={item?.title} />
          </div>
        ))}
      </div>
      <div
        className="flex flex-col gap-16 bg-gray-200"
        style={{
          backgroundImage: `url(${images?.mainBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[70%] xl:mx-auto">
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
}
