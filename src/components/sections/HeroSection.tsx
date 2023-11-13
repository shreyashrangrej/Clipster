import { Button } from "@/components/ui/button";

export default () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium">
            Strands of Style
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Elevate Your Look with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              Seamless Barber Bookings and Exceptional Service
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Connecting Barbers to You and Elevate Your Style with Seamless
            Bookings at Clipster. Where Expertise Meets Convenience for a Cut
            Above the Rest!
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Button>Login</Button>
            <Button variant={"outline"}>About</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
