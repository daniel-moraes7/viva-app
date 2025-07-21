import React from 'react';

interface SectionNavProps {
  items: { id: string; label: string }[];
}

const SectionNav: React.FC<SectionNavProps> = ({ items }) => (
  <nav aria-label="Navegação da página" className="hidden lg:block w-64 sticky top-24 self-start">
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Nesta página</h3>
      <ul className="space-y-2">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="block text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default SectionNav;
