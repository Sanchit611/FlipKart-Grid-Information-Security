import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div class="bg-white pb-6 sm:pb-8 lg:pb-12 ml-24">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
              {/* <p class="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
                Very proud to introduce
              </p> */}

              <h1 class="text-black-800 text-5xl font-bold mb-8 md:mb-12">
                Revolutionary Solution to Information Security
              </h1>

              <p class="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
              SafeKart is a platform allowing you to verify potential collaborators for your project - classifying them as malicious or trustworthy.
              </p>

              <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <a
                  href="#"
                  class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  <Link to="/login">
                  Login now to get started
                  </Link>
                </a>
              </div>
            </div>

            <div class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <img
                src="https://corporate.thermofisher.com/content/tfcorpsite/us/en/index/about/information-security/_jcr_content/root/container_1354577442/container_2140750867/textimage_copy.coreimg.png/1646769851818/reporting-information-security.png"
                loading="lazy"
                alt="Photo by Fakurian Design"
                class="w-full h-full object-cover object-center"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
