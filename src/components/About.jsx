import Card from "./Card";
const About = () => {
  const services = [
    {
      id: 1,
      icon: "pi pi-chart-line",
      heading: "Enhance Customer relationships",
      body: "Allow businesses to centralize customers data",
    },
    {
      id: 2,
      icon: "pi pi-bullseye",
      heading: "Improve efficiency and productivity",
      body: "Allow businesses to centralize customers data",
    },
    {
      id: 3,
      icon: "pi pi-chart-pie",
      heading: "Data driven Insights website",
      body: "Allow businesses to centralize customers data",
    },
    {
      id: 4,
      icon: "pi pi-external-link",
      heading: "Scale and Growth Adaptability",
      body: "Allow businesses to centralize customers data",
    },
  ];
  return (
    <>
      <div className="py-20 bg-slate-100 px-10 text-slate-900 ">
        <h2 className="font-semibold lg:text-6xl text-3xl text-center md:px-32 px-10 lg:px-64 leading-[1.2] mb-10">
          Experience the power of Seamless Functionality
        </h2>
        <p className="text-center md:px-32 px-10 lg:px-64">
          Boost a comprehensive suites of features designed to elevate every
          aspect of Customer management system
        </p>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center mt-10">
          {services.map((serv) => (
            <Card 
            key={serv.id}
            icon={serv.icon}
            heading={serv.heading}
            body={serv.body}
             />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
