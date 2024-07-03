import images from "../../image/imageGalery";

const Footer = () => {
  const image = [
    {
      title: "Delivery By:",
      img: images?.shipping,
    },
    {
      title: "Payment Methods:",
      img: images?.payments,
    },
    {
      title: "",
      img: images?.banks,
    },
    {
      title: "Secured By:",
      img: images?.digicert,
    },
  ];
  return (
    <main className="font-poppins bg-white py-8">
      <div className="flex flex-col gap-y-10 px-3 xl:flex-row xl:justify-between xl:px-[15%]">
        {image?.map((item, i) => (
          <div className="flex flex-col items-center xl:gap-y-3" key={i}>
            <h1 className="text-blue-400 font-bold text-xl">{item?.title}</h1>
            <img src={item?.img} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Footer;
