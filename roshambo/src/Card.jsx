const Card = ({ selection, image, onSelect }) => {
  return (
    <div className="card" onClick={() => onSelect(selection)}>
      <img src={image} alt={selection} />
      <h2>{selection}</h2>
    </div>
  );
};

export default Card;
