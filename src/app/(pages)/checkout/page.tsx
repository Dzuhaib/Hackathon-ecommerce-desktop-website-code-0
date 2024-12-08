import React from "react";
import Image from "next/image";

const page = () => {
  const title = " > Checkout";
  return (
    <div>
      <div className='flex items-center bg4-center bg4-cover h-[320px] flex-col justify-center bg-[url("/images/shopbg.png")] bg-cover'>
        <Image src="/icons/shop1.png" height={70} width={70} alt="" />
        <h1 className="text-[48px] font-semibold">Checkout</h1>
        <p>
          <span className="font-semibold">Home</span>
          {title}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start p-8 bg-white min-h-screen">

        <div className="w-full md:w-[60%]">
          <h1 className="text-2xl font-bold mb-6">Billing details</h1>
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country / Region
              </label>
              <select
                id="country"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              >
                <option value="">Select Country</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                placeholder="Street Address"
              />
              <input
                type="text"
                id="city"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                placeholder="Town / City"
              />
            </div>

            <div>
              <label
                htmlFor="province"
                className="block text-sm font-medium text-gray-700"
              >
                Province
              </label>
              <select
                id="province"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
              >
                <option value="">Select Province</option>
                <option value="Western Province">Western Province</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                placeholder="ZIP Code"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                placeholder="Phone"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                placeholder="Email Address"
              />
            </div>

            <div>
              <label
                htmlFor="additionalInfo"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                placeholder="Additional Information"
              />
            </div>
          </form>
        </div>

        <div className="w-full md:w-[35%] mt-10 md:mt-0">
          <div className="p-6 border border-gray-300 rounded-md">
            <h2 className="text-xl font-bold mb-6">Product</h2>
            <div className="flex justify-between items-center mb-4">
              <p>Asgaard sofa</p>
              <p>Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between items-center mb-4 border-t pt-4">
              <p>Total</p>
              <p className="text-xl font-bold">Rs. 250,000.00</p>
            </div>
            <div className="space-y-4">
              <div>
                <input type="radio" id="bank" name="payment" className="mr-2" />
                <label htmlFor="bank" className="text-sm">
                  Direct Bank Transfer
                </label>
                <p className="text-sm text-gray-600 mt-2">
                  Make your payment directly into our bank account. Please use
                  your order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
              <div>
                <input type="radio" id="cash" name="payment" className="mr-2" />
                <label htmlFor="cash" className="text-sm">
                  Cash on Delivery
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
            <button className="w-full mt-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
