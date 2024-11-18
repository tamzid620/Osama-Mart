import Banner from "@/components/shared/Banner/Banner";

export const metadata = {
  title: "OsamaMart -Home",
  description: "Generated by Tamzid",
};

const Home = () => {
  return (
    <div className="xl:max-w-7xl lg:max-w-6xl md:max-w-3xl sm: max-w-sm mx-auto 
      flex justify-between items-center">
    <Banner/>
    </div>
  );
}

export default Home;
