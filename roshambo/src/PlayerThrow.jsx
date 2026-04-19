import Card from "./Card.jsx";

function PlayerThrow({ Choices, onSelect }) {
  return (
    <>
      <div className="gameContainer">
        {Choices.map((item) => (
          <Card
            key={item.name}
            selection={item.name}
            image={item.img}
            onSelect={onSelect}
          />
        ))}
      </div>
    </>
  );
}

export default PlayerThrow;
