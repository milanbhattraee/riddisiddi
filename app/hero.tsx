import { Button } from "@radix-ui/themes";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="w-full   flex justify-center items-center layout-padding relative"
      style={{
        backgroundImage: `
  linear-gradient(to bottom,
    rgba(0,0,0,0.2),
    rgba(14,165,233,0.25),   /* sky-500 */
    rgba(21,94,117,0.35),    /* sky-800 */
    rgba(132,204,22,0.25),   /* lime-500 */
    rgba(0,0,0,0.7)
  ),
  url("/herobg.jpg")
`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: ".9",
      }}
    >
      <div className="absolute inset-0 z-10 "></div>

      <div className=" flex  items-center z-10 text-center md:text-start md:justify-start w-full justify-center">
        <div className=" w-full md:max-w-2xl text-xl gap-y-10 md:gap-y-10  items-center md:items-start flex flex-col gap-8">
          <div className=" rounded-full bg-white">
            <p className="text-sm  md:text-lg px-4 text-blue-800  ">
              Accepting new patients
            </p>
          </div>

          <h1 className="heading-xl">Riddi Siddi Medical & Dignostics</h1>
          <p className=" body-text ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            magnam magni beatae! Lorem ipsum dolor sit amet.
          </p>
          <Link href="/form">
          <Button
            className="w-3/5"
            style={{
              height: "3rem",
              fontSize: "1rem",
            }}
          >
            Book an appointment
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
