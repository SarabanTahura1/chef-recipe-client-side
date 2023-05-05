import React from "react";

const CookingTips = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-center mb-6">
            Cooking Tips and Techniques
          </h2>
          <div className="flex flex-wrap -mx-2">
            {/* cooking tips card 01 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://source.unsplash.com/random/800x600/?food,cooking"
                  alt=""
                />
                <div className="p-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    Master the Art of Searing Meat
                  </h3>
                  <p className="text-base leading-6 text-gray-700 mb-4">
                    Preheat your pan until it's very hot. Dry your meat
                    thoroughly before searing to avoid steaming. Season your
                    meat generously with salt and pepper before searing. Don't
                    overcrowd the pan - sear in batches if necessary. Let your
                    meat rest for a few minutes after searing to ensure maximum
                    juiciness.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* cooking tips card 02 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://source.unsplash.com/random/800x600/?food,cooking"
                  alt=""
                />
                <div className="p-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    The Secret to Perfectly Roasted Vegetables
                  </h3>
                  <p className="text-base leading-6 text-gray-700 mb-4">
                    To achieve perfectly roasted vegetables, be sure to cut them
                    into even sizes and toss them with a generous drizzle of
                    olive oil, salt, and pepper. Don't overcrowd the pan - give
                    your veggies some breathing room. Roast at a high
                    temperature and stir occasionally for perfectly caramelized.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* cooking tips card 03 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://source.unsplash.com/random/800x600/?food,cooking"
                  alt=""
                />
                <div className="p-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    Knife Skills 101: How to Chop Like a Pro
                  </h3>
                  <p className="text-base leading-6 text-gray-700 mb-4">
                    To chop like a pro, use a sharp knife and hold it correctly.
                    Keep your non-dominant hand in a "claw" shape to protect
                    your fingers. Use a rocking motion and let the knife do the
                    work. Practice and patience are key to improving your knife
                    skills.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* cooking tips card 04 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://source.unsplash.com/random/800x600/?food,cooking"
                  alt=""
                />
                <div className="p-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    The Science of Baking: Tips for Perfecting Your Pastry Game
                  </h3>
                  <p className="text-base leading-6 text-gray-700 mb-4">
                    Baking is a science, so it's important to follow recipes
                    carefully and measure ingredients accurately. Keep your
                    ingredients, particularly your butter, cold. Use a light
                    touch when handling the dough to avoid toughening it. Don't
                    overwork the dough, and let it rest before rolling it out.{" "}
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* cooking tips card 05 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://source.unsplash.com/random/800x600/?food,cooking"
                  alt=""
                />
                <div className="p-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    Sous Vide Cooking: How to Achieve Restaurant-Quality Results
                    at Home
                  </h3>
                  <p className="text-base leading-6 text-gray-700 mb-4">
                    Sous vide cooking allows you to cook food to a precise
                    temperature, resulting in perfect texture every time.
                    Vacuum-seal the food with seasonings and cook in a water
                    bath at a low temperature for a longer period. Sear the food
                    for added flavor and texture. Enjoy!
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* cooking tips card 06 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src="https://source.unsplash.com/random/800x600/?food,cooking"
                  alt=""
                />
                <div className="p-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    Flavorful Marinades: How to Infuse Your Meat with
                    Deliciousness
                  </h3>
                  <p className="text-base leading-6 text-gray-700 mb-4">
                    Flavorful marinades can take your meat to the next level. To
                    make a great marinade, start with an acid like lemon juice
                    or vinegar, add some oil, and seasonings like garlic, herbs,
                    or spices. Marinate your meat for at least 30 minutes before
                    cooking to allow the flavors to penetrate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookingTips;
