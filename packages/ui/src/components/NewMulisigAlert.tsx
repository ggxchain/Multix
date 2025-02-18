import { Alert, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { HiOutlineXMark as CloseIcon } from 'react-icons/hi2'

interface Props {
  className?: string
  onClose: () => void
}

const NewMulisigAlert = ({ className = '', onClose }: Props) => {
  return (
    <Alert
      className={className}
      variant="outlined"
      severity="info"
    >
      <div className="infoText">
        Your new multisig is being created. It will be available in ~1min from the dropdown.
      </div>
      <IconButton
        className="closeButton"
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon size={20} />
      </IconButton>
    </Alert>
  )
}

export default styled(NewMulisigAlert)`
  width: 100%;
  margin-top: 1rem;

  .infoText {
    flex: 1;
  }

  .MuiAlert-message {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .MuiAlert-icon {
    align-items: center;
  }
`
