/*
heading
card x 3
    {
        img
        title
        description
        button
    }
*/

import Card from "../card/card.js";

const Section = () => {
  return (
    <div id="Section">
      <h1>We Love New Friends</h1>
      <div id = "CardBox">
        <Card
          source="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Card Title"
        />

        <Card
          source="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Card Title"
        />

        <Card
          source="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Card Title"
        />
      </div>
    </div>
  );
};

export default Section;
