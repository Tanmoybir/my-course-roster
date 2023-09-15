import PropTypes from 'prop-types'

const ShowDetails = ({card}) => {
    const {title}=card
    return (
        <div>
            <li>{title}</li>
        </div>
    );
};

ShowDetails.propTypes ={
    handleAddBookmarks:PropTypes.object
}

export default ShowDetails;