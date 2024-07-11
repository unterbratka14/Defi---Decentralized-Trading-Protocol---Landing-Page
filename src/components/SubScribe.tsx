const SubScribe = () => {
  return (
    <>
      <div className="w-full px-4 py-16 text-white bg-black flex flex-col gap-8 items-center text-center">
        <h1>Join Our Defi Community</h1>

        <div className="flex gap-4">
          <input
            className="px-2 rounded-xl"
            type="email"
            placeholder="Enter Your Email"
          />
          <button>Sign Up</button>
        </div>

        <div className="flex items-baseline">
          <input type="checkbox" />
          <p>Yes, I agree to receive email communications from DeFi.</p>
        </div>
      </div>
    </>
  );
};

export default SubScribe;
