import React from 'react';

const SWOT = () => {
  const SWOTdata = [
    {
      id: 1,
      type: "Weaknesses",
      items: [
        { id: 1, description: "Lack of brand recognition in international markets.", details: "Our organization has limited exposure outside of our local markets, which impacts our ability to expand globally." },
        { id: 2, description: "Outdated technology infrastructure.", details: "The current systems we use are slow and inefficient, leading to increased operational costs and slower response times." },
        { id: 3, description: "High employee turnover rate.", details: "A high rate of staff turnover is affecting productivity and leading to increased recruitment and training costs." },
      ],
    },
    {
      id: 2,
      type: "Opportunities",
      items: [
        { id: 1, description: "Expansion into emerging markets.", details: "With the rise of digital adoption in emerging markets, there is a significant opportunity to introduce our products to new regions." },
        { id: 2, description: "Strategic partnerships with tech companies.", details: "Forming alliances with key technology providers can help accelerate our innovation and bring new solutions to market." },
        { id: 3, description: "Growing demand for eco-friendly products.", details: "Consumers are becoming more conscious about sustainability, creating a growing market for environmentally friendly alternatives." },
      ],
    },
    {
      id: 3,
      type: "Strengths",
      items: [
        { id: 1, description: "Strong customer loyalty and satisfaction.", details: "We have built a solid customer base with high retention rates, which allows for more predictable revenue." },
        { id: 2, description: "Diverse product portfolio.", details: "Our company offers a wide range of products catering to different consumer needs, reducing dependency on any single product." },
        { id: 3, description: "Robust financial position.", details: "Our strong financial standing allows us to invest in innovation, research, and strategic acquisitions." },
      ],
    },
    {
      id: 4,
      type: "Threats",
      items: [
        { id: 1, description: "Increasing competition in the market.", details: "New entrants and existing competitors are aggressively targeting our market share, which could affect our sales." },
        { id: 2, description: "Regulatory changes in key markets.", details: "Ongoing regulatory changes, especially related to data protection and environmental policies, could increase operational costs." },
        { id: 3, description: "Economic downturn affecting consumer spending.", details: "A potential global economic downturn may reduce consumer purchasing power, affecting our sales and profitability." },
      ],
    },
  ];

  return (
    <section className="my-10 px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 text-center">1. Current Diagnosis</h2>
      
      {/* Grid layout for the four SWOT boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SWOTdata.map((category) => (
          <div key={category.id} className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">{category.type}</h3>
            <ul className="list-disc ml-6 text-gray-400">
              {category.items.map((item) => (
                <li key={item.id} className="mb-4">
                  <span className="font-bold">{item.description}</span>
                  <p className="text-gray-500 text-sm mt-1">{item.details}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SWOT;
