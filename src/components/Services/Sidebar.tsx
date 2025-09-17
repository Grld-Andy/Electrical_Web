import React from 'react'

interface CategoryData {
    icon: React.ReactNode;
    groups: { name: string }[];
}

interface Props{
    combinedData: { [category: string]: CategoryData };
    activeCategory: string;
    setActiveCategory: (category: string) => void;
    activeGroupIndex: number;
    setActiveGroupIndex: (index: number) => void;
    activeProductIndex: number;
    setActiveProductIndex: (index: number) => void;
}

const Sidebar: React.FC<Props> = (
    {combinedData, setActiveCategory, setActiveGroupIndex, setActiveProductIndex,
        activeCategory, activeGroupIndex, activeProductIndex
    }) => {
  return (
    <aside className="md:w-1/4 mb-10 md:mb-0">
        <div className="bg-white shadow-md rounded-md border-slate-200 sticky top-20">
          {/* Category selection */}
          <ul>
            {Object.keys(combinedData).map((category, catIdx) => (
              <li
                key={category}
                className={`${catIdx !== 0 ? 'border-t border-gray-200' : ''}`}
              >
                <button
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveGroupIndex(0);
                    if (category === "Products") setActiveProductIndex(0);
                  }}
                  className={`w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-100 font-semibold ${
                    activeCategory === category ? "bg-slate-100 text-blue-600" : ""
                  }`}
                >
                  {combinedData[category].icon}
                  <span>{category}</span>
                </button>
                {/* Show group list for active category directly underneath */}
                {activeCategory === category && (
                  <ul className="mt-2 mb-2 px-2">
                    {combinedData[category].groups.map((group, idx) => (
                      <li key={group.name}>
                        <button
                          onClick={() => {
                            if (category === "Products") {
                              setActiveProductIndex(idx);
                            } else {
                              setActiveGroupIndex(idx);
                            }
                          }}
                          className={`w-full cursor-pointer text-left px-3 py-2 rounded-md mb-1 hover:bg-slate-100 text-sm ${
                            (category === "Products" ? activeProductIndex : activeGroupIndex) === idx
                              ? "text-blue-500 font-semibold"
                              : "text-gray-700"
                          }`}
                        >
                          {group.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
    </aside>
  )
}

export default Sidebar