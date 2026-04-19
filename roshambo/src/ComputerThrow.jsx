import Card from "./Card";

const ComputerThrow = ({ choice }) => {
  return (
    <>
      <div className="enemyArea">
        <h2>Computer's Move</h2>
        <Card
          selection={choice.name}
          image={choice.image}
          onSelect={() => {}}
        />
      </div>
    </>
  );
};
export default ComputerThrow;
