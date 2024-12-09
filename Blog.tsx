const blogs = [
    { title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis", image: "Image Placeholder (2).png" },
    { title: "Healthy Food Recipes", image: "Image Placeholder (1).png" },
    { title: "Top 10 Desserts", image: "Image Placeholder.png" },
  ];
  
  export default function BlogSection() {
    return (
      <section id="blog" className="py-10 bg-black text-white">
        <h1 className="text-brandprimary text-center font-bold">Blog Post</h1>
        <h2 className="text-center text-3xl font-bold">
          <span className="text-brandprimary">La</span>
          <span className="text-white">test News & Blog</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-gray-800 rounded overflow-hidden shadow-lg">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  