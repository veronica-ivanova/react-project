import { createRoot } from "react-dom/client";
import { restaurants } from "./mock";

createRoot(document.getElementById("root")).render(
  <ul>
    {restaurants.map((item) => (
      <li>
        <h1>{item.name}</h1>

        <h3>Меню</h3>
        <ul>
          {item.menu.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>

        <h3>Отзывы</h3>
        <ul>
          {item.reviews.map((item) => (
            <li>{item.text}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);
