const ShimmerCard = () => {
  return (
    <div className="bg-white" data-testid="shimmer-card">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Array.from({ length: 20 }, (_, i) => (
            <div className="group relative" key={i}>
              <div className="animate-pulse w-full h-80 bg-slate-200"></div>
              <div className="mt-4 flex justify-between">
                <div className="w-full drop-shadow-md">
                  <div className="space-y-2">
                    <div className="animate-pulse w-2/6 h-3 bg-slate-200"></div>
                    <div className="animate-pulse w-2/6 h-3 bg-slate-200"></div>
                  </div>
                </div>

                <div className="animate-pulse w-2/12 h-3 bg-slate-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
