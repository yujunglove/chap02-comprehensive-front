import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PokemonItem({ name, imageUrl }) {
  return (
    <div className="pokemon-item">
      <Link to={`/pokemon/${name}`}>
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </Link>
    </div>
  );
}

PokemonItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default PokemonItem;
