import React from "react";

function FavoritesList({ favorites, onSelectCity }) {
  if (favorites.length === 0) return null;

  return (
    <div className="favorites">
      <h3>Favorite cities:</h3>
      <ul>
        {favorites.map((city) => (
          <li key={city}>
            <button onClick={() => onSelectCity(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
