export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-2 gap-2 items-stretch justify-center h-full w-ful my-auto mx-0 min-h-screen p-4">
      <div className="col-span-12 sm:col-span-12 lg:col-span-5 profile-box">
          <div className="flex flex-col justify-center gap-12 items-start h-full">
              <div className="flex flex-row flex-wrap items-center gap-4">
                  <div className="w-[50px] h-[50px] bg-indigo-500 rounded-full"></div>
                  <div className="flex flex-col">
                    <h1 className="font-medium">Hi, I'm Ferdinalaxewall</h1>
                    <p className="text-sm text-white/70 font-light">Software Developer</p>
                  </div>
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="font-semibold text-3xl">I'm Architect Robust, Scalable Web Solutions That Turn Bold Ideas Into Lightning-Fast, Reliable Digital Experiences.</h3>
                <p className="text-sm text-white/70 font-light">
                  I'm an approved software developer with 4+ years of experience delivering high-impact, battle-tested solutions across fintech, eCommerce, inventory, logistics, healthcare, and edtech. From zero-downtime payment gateways to real-time supply-chain dashboards, I turn complex business problems into elegant, scalable code that users trust and teams love to maintain.
                </p>
              </div>
          </div>
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-3 profile-box bg-white/10">
          Box Satu
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-4 profile-box">
          Box Satu
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-7 profile-box">
          Box Satu
      </div>
      <div className="col-span-12 sm:col-span-6 lg:col-span-5 profile-box">
          Box Satu
      </div>
    </div>
  );
}
