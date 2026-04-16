export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-dark text-brand-cream py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-display font-bold mb-4">Meet Sean Mark</h1>
          <p className="text-xl opacity-90">Chef, creator, and passionate about bringing people together through food</p>
        </div>
      </section>

      {/* Chef Story */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="bg-gradient-to-br from-brand-dark to-brand-gold rounded-lg p-12 text-brand-cream mb-12">
            <h2 className="text-3xl font-display font-bold mb-6">The Chef&apos;s Story</h2>
            <p className="mb-4">
              Sean Mark&apos;s Cuisine was born from a simple belief: great food should bring people together. With years of culinary experience and a passion for West Indian and contemporary cooking, Sean creates dishes that nourish both body and soul.
            </p>
            <p className="mb-4">
              Every meal is crafted with intention, using fresh ingredients and time-honored techniques. Whether it&apos;s a weeknight dinner for your family or an intimate gathering with friends, Sean&apos;s cooking celebrates flavor, quality, and the joy of sharing a table.
            </p>
            <p>
              At Sean Mark&apos;s Cuisine, we believe that food is more than sustenance - it&apos;s an experience, a memory, and an expression of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-brand-dark">Philosophy</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="font-semibold text-brand-dark">Fresh Ingredients</p>
                    <p className="text-gray-600 text-sm">Sourcing the finest seasonal ingredients</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">❤️</span>
                  <div>
                    <p className="font-semibold text-brand-dark">Cooked with Heart</p>
                    <p className="text-gray-600 text-sm">Every dish prepared with care and passion</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <p className="font-semibold text-brand-dark">Global Flavors</p>
                    <p className="text-gray-600 text-sm">West Indian roots with contemporary influences</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-brand-dark">Culinary Style</h3>
              <p className="text-gray-700 mb-4">
                Sean&apos;s cooking is rooted in West Indian traditions with influences from contemporary cuisine. He believes in letting quality ingredients speak for themselves, while building complex, satisfying flavors through technique and intuition.
              </p>
              <p className="text-gray-700">
                From comfort food classics to innovative dishes, each meal tells a story and celebrates the joy of gathering around the table.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="border-t-2 border-brand-gold pt-12">
            <h3 className="text-2xl font-display font-bold mb-8 text-brand-dark">Experience</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-4xl">🍳</div>
                <div>
                  <p className="font-semibold text-brand-dark">Professional Chef</p>
                  <p className="text-gray-600">Years of culinary excellence in diverse kitchen environments</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">👨‍🍳</div>
                <div>
                  <p className="font-semibold text-brand-dark">Menu Development</p>
                  <p className="text-gray-600">Creating innovative weekly menus that balance flavor, nutrition, and variety</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <p className="font-semibold text-brand-dark">Continuous Learning</p>
                  <p className="text-gray-600">Always exploring new techniques, ingredients, and culinary trends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-12">
        <div className="container text-center">
          <h2 className="text-3xl font-display font-bold mb-4 text-brand-dark">Ready to Experience Sean&apos;s Cooking?</h2>
          <p className="text-lg text-brand-dark mb-6">Order this week&apos;s menu or inquire about catering</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/menu" className="bg-brand-dark text-brand-cream px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity">
              Browse Menu
            </a>
            <a href="/catering" className="bg-white text-brand-dark px-6 py-3 rounded font-medium hover:opacity-90 transition-opacity">
              Learn About Catering
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
