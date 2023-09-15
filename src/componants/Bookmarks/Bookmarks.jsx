import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
            <div className="md:w-1/3 lg:w-1/4">
            <h1>Course Name:{bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.prototypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;