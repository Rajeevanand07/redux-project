import imm from "/imm.png"

const Home = () => {
  return (
    <div className="h-[80%] flex items-center justify-between px-[10%]">
      {/* Left Content */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Every Purchase<br />Will Be Made<br />With Pleasure
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          Buying and Selling of goods services using the internet.
        </p>
        <div className="flex gap-6">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition">
            Start Shopping
          </button>
          <button className="px-8 py-3 border-2 border-purple-600 text-purple-700 font-semibold rounded-full hover:bg-purple-50 transition">
            Learn More
          </button>
        </div>
      </div>
      {/* Right Image */}
      <div className="relative flex-1 flex justify-end">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-[420px] rounded-full -z-10 blur-[1px]" />
        <img
          src={imm}
          alt="Shopping"
          className="w-full h-[420px] object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Home;
