import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

export default function CustomTextInput(props) {
    const { label, search } = props;
    return (
        <TextField
            className='customTextInput'
            label={label}
            variant="outlined"
            InputProps={search ? {
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            } : {}}
        />
    );
}

CustomTextInput.defaultProps = {
    label: '',
    search: false
}