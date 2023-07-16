import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import React from 'react';
import { filterOptions } from './ranking.contants';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const MultiSelectComboBox = ({setSelectedFilters}) => {
  const ref = React.useRef<boolean>(false)
  return (
    <div className='combo-container'>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={filterOptions}
        onChange={(e,obj)=>{
          e.preventDefault();
          setSelectedFilters(obj)
        }}
        disableCloseOnSelect
        getOptionDisabled={(option) =>{
            const isContentsState = ['연재중','완결'].includes(option.title)
            return isContentsState && ref.current
          }
        }
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => {
          const isContentsState = ['연재중','완결'].includes(option.title)
          if(isContentsState ) ref.current=selected
          return <li {...props}>
              <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
              />
              {option.title}
            </li>
          }
        }
        style={{ width: 300, marginRight:100 }}
        renderInput={(params) =>(
           <TextField {...params} label="Checkboxes" placeholder="Favorites" />
        )}
      />
    </div>
  );
}