import PropTypes from "prop-types";

export default function CardPresentation({ Icon, Title, Description }) {
  return (
    <div className="feature-item">
      <img src={Icon} alt="Icon-png" className="feature-icon" />
      <h3 className="feature-item-title">{Title}</h3>
      <p>{Description}</p>
    </div>
  );
}

CardPresentation.propTypes = {
  Icon: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
};
