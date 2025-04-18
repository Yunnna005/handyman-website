export default function Gallery() {
  const projects = [
    {
      before:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      after:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
      title: "Kitchen Renovation",
      description:
        "Transformed a dated kitchen into a modern, functional space.",
    },
    {
      before:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      after:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
      title: "Bathroom Remodel",
      description: "Upgraded an old bathroom with new tiles and fixtures.",
    },
    {
      before:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      after:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
      title: "Deck Restoration",
      description: "Restored a weathered deck with staining and repairs.",
    },
    {
      before:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      after:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
      title: "Deck Restoration",
      description: "Restored a weathered deck with staining and repairs.",
    },
    {
      before:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      after:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
      title: "Deck Restoration",
      description: "Restored a weathered deck with staining and repairs.",
    },
    {
      before:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp",
      after:
        "https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp",
      title: "Deck Restoration",
      description: "Restored a weathered deck with staining and repairs.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-12 h-12 mx-auto text-amber-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <h2 className="mt-3 text-3xl font-bold text-gray-900">Work Gallery</h2>
        <p className="mt-2 text-base text-gray-600">
          See the transformations we've brought to homes like yours
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {project.description}
              </p>
              <figure className="diff aspect-[16/9] mt-3" tabIndex={0}>
                <div className="diff-item-1" role="img" tabIndex={0}>
                  <img alt={`${project.title} - Before`} src={project.before} />
                </div>
                <div className="diff-item-2" role="img">
                  <img alt={`${project.title} - After`} src={project.after} />
                </div>
                <div className="diff-resizer"></div>
              </figure>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block bg-amber-600 text-white px-5 py-2 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200 shadow-md text-sm"
          >
            Book Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
