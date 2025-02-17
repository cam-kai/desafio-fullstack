import PropTypes from "prop-types";


const Card = props => {
    return (
        <div className={"card"}>
            {props.children}
        </div>
    );

};

Card.propTypes = {
    children : PropTypes.any.isRequired
}



export default Card;