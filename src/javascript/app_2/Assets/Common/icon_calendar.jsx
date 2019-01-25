import PropTypes from 'prop-types';
import React     from 'react';

const IconCalendar = ({ className, onClick }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        className={className}
        onClick={onClick}
    >
        <path fill='#5C5C5C' fillRule='evenodd' d='M13.875 2H12v-.438a.562.562 0 1 0-1.125 0V2h-5.75v-.438a.562.562 0 1 0-1.125 0V2H2.125C1.503 2 1 2.503 1 3.125v10.75C1 14.497 1.503 15 2.125 15h11.75c.622 0 1.125-.505 1.125-1.125V3.125C15 2.503 14.497 2 13.875 2zM2.125 3.125H4v.313a.562.562 0 1 0 1.125 0v-.313h5.75v.313a.562.562 0 1 0 1.125 0v-.313h1.875v1.75H2.125v-1.75zm11.75 10.75H2.125V6h11.75v7.875zM4.5 8h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1zm3 0h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1zm3 0h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1zm-6 3.031h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1zm3 0h1a.5.5 0 1 1 0 1h-1a.5.5 0 1 1 0-1z' />
    </svg>
);

IconCalendar.propTypes = {
    className: PropTypes.string,
    onClick  : PropTypes.func,
};

export { IconCalendar };
