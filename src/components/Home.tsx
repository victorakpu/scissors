import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
    <div className="max-w-3xl text-center bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-xl font-bold text-[#335383ff] mb-4 uppercase">Welcome to Scissor</h1>
    <img
          
          src="/removed.png"
          height={200}
          width={200}
          />
      <h2 className="text-xl font-semibold text-[#335383] mb-4">The Future of URL Shortening</h2>
      <p className="text-[#4A6A9A] mb-6">
        In an age where brevity is paramount, we at Scissor are revolutionizing how we interact
        with the digital world. Inspired by the need to keep things concise, our mission is to
        make URLs as short as possible, transforming the way we share links and information.
      </p>
      <p className="text-[#4A6A9A] mb-6">
        Scissor isn't just another URL-shortening tool—it's a game-changer. In a world where
        efficiency and simplicity are valued more than ever, Scissor stands out by offering a
        seamless, user-friendly experience. Whether it's for social media, marketing campaigns, or
        everyday use, Scissor makes your links sleek and manageable.
      </p>
      <p className="text-[#4A6A9A] mb-6">
        We believe that in the next two years, Scissor will disrupt the URL-shortening industry,
        challenging giants like bit.ly and ow.ly. By prioritizing brevity and simplicity, we're on
        a mission to become the go-to tool for anyone who needs to share links quickly and
        effectively.
      </p>
      <p className="text-[#4A6A9A]">
        Experience the future of URL shortening with Scissor. Embrace the power of brevity and see
        how it can transform your digital interactions.
      </p>
      <div className="mt-8">
        <Link to="/link-shortner">
        
        <button className="bg-[#335383ff] hover:bg-gray-100 text-white hover:text-[#335383ff] font-bold py-2 px-4 rounded-md m-2">
          Get Started
        </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Home;

