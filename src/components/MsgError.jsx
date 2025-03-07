import PropTypes from "prop-types";

export default function MsgError({ error }) {
  return <div className="error-msg">{error}</div>;
}

MsgError.propTypes = {
  error: PropTypes.string,
};
