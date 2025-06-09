import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return <h1 className={`${pacifico.className} w-fit text-4xl`}>LineFeed</h1>;
};

export default Logo;
