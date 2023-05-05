import React from "react";

const FoodAndHealth = () => {
  return (
    <div>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Food and Health
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://media.istockphoto.com/id/1140193165/photo/slim-and-fit-woman-drinking-water-before-having-breakfast.jpg?s=612x612&w=0&k=20&c=_QgpYIvS6mFI18tGVJGGD5mKbJ9KHk5JBqAfHDIopKg="
                alt="Healthy food"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Healthy Eating Habits
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Healthy eating habits involve consuming a balanced diet of
                  whole foods, including fruits, vegetables, lean proteins,
                  whole grains, and healthy fats, while limiting processed and
                  high-sugar foods.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/11/exercise-1667806059.jpg"
                alt="Fitness"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  Importance of Fitness
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Fitness is important for overall health and well-being.
                  Regular physical activity can improve cardiovascular health,
                  muscle strength, flexibility, and mental health, while
                  reducing the risk of chronic diseases.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://img.taste.com.au/27HLC_W5/taste/2019/05/one-pot-healthy-chicken-pasta-149595-2.jpg"
                alt="Healthy recipes"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Healthy Recipes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Healthy recipes are dishes made with nutrient-dense
                  ingredients, designed to provide balanced and wholesome meals
                  that support overall health and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodAndHealth;
