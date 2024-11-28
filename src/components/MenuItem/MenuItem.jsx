import React from 'react';

export default function MenuItem({ label, submenu }) {
  return (
    <li className="trigger">
      <a href="/#">{label}</a>
      {submenu && submenu.length > 0 && (
        <ul className="submenu">
          {submenu.map((item, index) => (
            <li key={index}>
              <a href="/#">{item}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}



