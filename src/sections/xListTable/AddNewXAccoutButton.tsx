import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { AddSquare } from 'iconsax-react';

interface Props {
  onClick: () => void;
}

const AddNewXAccountButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Tooltip title="Add new X account">
      <IconButton onClick={onClick}>
        <AddSquare size={28} style={{ color: 'gray', marginTop: 4 }} />
      </IconButton>
    </Tooltip>
  );
};

export default AddNewXAccountButton;
