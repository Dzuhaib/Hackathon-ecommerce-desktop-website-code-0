import { url } from "inspector";

const Footer = () => {
  return (
    <div>
      <div className="flex bg-cream2 justify-between items-center px-20 py-20">
        <div>
          <h2 className="font-semibold text-[30px]">Free Delivery</h2>
          <p className="w-[75%]">
            For all oders over $50, consectetur adipim scing elit.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-[30px]">90 Days Return</h2>
          <p className="w-[75%]">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-[30px]">Secure Payment</h2>
          <p className="w-[75%]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
      <div>

        <div className="relative bg4-center bg4-cover h-[320px] flex flex-col justify-center bg-cover items-center text-center py-10 px-20 bg-[url('/images/instagrambg.png')]">
          <h1 className="text-5xl font-extrabold">Our Instagram</h1>
          <p className="mt-2 text4-lg">Follow our store on Instagram</p>
          <button className="mt-4 px-6 py-2 bg4-white text4-gray-800 font-semibold rounded-full shadow-lg hover:shadow-md">
            Follow Us
          </button>
        </div>
      </div>


      <div className="flex justify-between py-20 px-20">

        <div>
          <p>400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-4 text-black">
            <li>
              <a href="#" className="hover:text4-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text4-gray-600">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text4-gray-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text4-gray-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <ul className="space-y-4 text-black">
            <li>
              <a href="#" className="hover:text4-gray-600">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text4-gray-600">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text4-gray-600">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <div className="flex items-center border border-b-2 border-black rounded">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-grow p-2 text4-gray-700 "
            />
            <button className="bg4-gray-800 text4-white px-4 py-2 hover:bg4-gray-600">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="bg4-gray-100 text4-gray-600 py-4 text-center text4-sm">
        2022 Meubel House. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
