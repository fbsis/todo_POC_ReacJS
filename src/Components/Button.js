import { Button as Mbuttom } from '@material-ui/core';

import PropTypes from 'prop-types';


Button.propTypes = {
    children: PropTypes.instanceOf(Object),
    errors: PropTypes.bool,
    ref: PropTypes.instanceOf(Object),
    type: PropTypes.string,
    size: PropTypes.string,
};

export default function Button(props) {
    const { children, type, size } = props;

    return (
        <Mbuttom
            type={type}
            fullWidth
            variant="contained"
            color="primary"
            size={size}

        >
            {children}
        </Mbuttom>
    );
}

