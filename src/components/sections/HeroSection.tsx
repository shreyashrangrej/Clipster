import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium">
            Strands of Style
          </h1>
          <h2 className="text-4xl font-extrabold mx-auto md:text-5xl">
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
          <div className="flex items-center justify-center gap-3">
            <Link href="/login">
              <Button>Login</Button>
            </Link>
            <Button variant={"outline"}>About</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
