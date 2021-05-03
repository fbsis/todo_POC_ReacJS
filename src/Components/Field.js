import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';

const getError = (errors, name) => {
    return name.split('.').reduce((memo, value) => {
        return memo?.[value];
    }, errors);
}

const Field = React.forwardRef((props, ref) => {
    const {
        required,
        name,
        type,
        label,
        handleUpdated,
        errors,
        defaultValue,
        size
    } = props;

    const error = getError(errors, name);

    return (
        
        <TextField
            inputRef={ref}
            error={error ? true : false}
            variant="outlined"
            margin="normal"
            require={required}
            type={type || undefined}
            fullWidth
            label={label}
            name={name}
            id={name}
            size={size}
            onChange={handleUpdated}
            defaultValue={defaultValue}
        />
    );
});

Field.propTypes = {
    handleUpdated: PropTypes.instanceOf(Object),
    ref: PropTypes.instanceOf(Object),
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    errors: PropTypes.bool,
    defaultValue: PropTypes.string,
    size: PropTypes.string,

};

export default Field;

