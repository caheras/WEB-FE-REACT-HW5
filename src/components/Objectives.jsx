function Objectives() {
  const objectives = [
    { id: 1, goal: "Improve Customer Satisfaction", target: 100, progress: 50, compliance: 50 },
    { id: 2, goal: "Expand Market Share", target: 150000, progress: 20000, compliance: 13 },
    { id: 3, goal: "Increase Operational Efficiency", target: 500, progress: 100, compliance: 20 },
    { id: 4, goal: "Boost Employee Retention", target: 1000, progress: 800, compliance: 80 },
    { id: 5, goal: "Launch New Product Line", target: 10000, progress: 9500, compliance: 95 },
  ];

  // Function to calculate status based on compliance
  const getStatus = (compliance) => {
    if (compliance >= 80) return { text: "Successful", color: "text-green-400" };
    if (compliance >= 50) return { text: "Acceptable", color: "text-yellow-400" };
    return { text: "Critical", color: "text-red-400" };
  };

  return (
    <section className="my-10 px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 text-center">3. Strategic Objectives</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-gray-900 rounded-lg shadow-md text-gray-400">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 text-white">Code</th>
              <th className="px-4 py-2 text-white">Objective</th>
              <th className="px-4 py-2 text-white">Target</th>
              <th className="px-4 py-2 text-white">Progress</th>
              <th className="px-4 py-2 text-white">Compliance</th>
              <th className="px-4 py-2 text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {objectives.map((obj) => {
              const status = getStatus(obj.compliance);
              return (
                <tr key={obj.id} className="hover:bg-gray-700 border-b border-gray-600">
                  <td className="px-4 py-2">{obj.id}</td>
                  <td className="px-4 py-2">{obj.goal}</td>
                  <td className="px-4 py-2">${obj.target.toLocaleString()}</td>
                  <td className="px-4 py-2">${obj.progress.toLocaleString()}</td>
                  <td className="px-4 py-2">{obj.compliance}%</td>
                  <td className={`px-4 py-2 font-bold ${status.color}`}>{status.text}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Objectives;
