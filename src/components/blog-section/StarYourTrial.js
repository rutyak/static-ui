const StartYourTrial = () => {
  return (
    <div className="bg-gray-100 mt-12 py-14 text-center shadow flex flex-col gap-4 ">
      <div>
        <h2 className="text-3xl font-semibold font-sans text-gray-800">
          Start your free trial
        </h2>
        <p className="text-gray-600 mt-2">
          Join over 4,000+ startups already growing with Untitled.
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-4 mobile:flex-col-reverse mobile:w-full mobile:items-center lg:flex-row">
        <button className="px-4 py-2 border bg-white shadow-sm text-gray-700 rounded-lg hover:bg-gray-400 mobile:w-[90%] lg:w-[200px] xl:w-[116px] xl:text-sm">
          Learn more
        </button>
        <button className="px-4 py-2 bg-purple-600 shadow-sm text-white rounded-lg hover:bg-purple-700 mobile:w-[90%] lg:w-[200px] xl:w-[116px] xl:text-sm">
          Get started
        </button>
      </div>
    </div>
  );
};

export default StartYourTrial;