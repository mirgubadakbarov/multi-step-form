import {styled} from "@mui/material/styles"

import Switch from "@mui/material/Switch"

const PinkSwitch = styled(Switch)(({theme}) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "white",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "hsl(213, 96%, 18%)",
    opacity: 1,
  },
  "& .MuiSwitch-switchBase + .MuiSwitch-track": {
    backgroundColor: "hsl(213, 96%, 18%)",
    opacity: 1,
  },
  "& .MuiSwitch-thumb ": {
    width: "15px",
    height: "15px",
  },
  "& .MuiSwitch-switchBase ": {
    right: "20px",
    top: "2px",
  },
  "& .MuiSwitch-root": {
    height:"100px"
  }
}))

const label = {inputProps: {"aria-label": "Color switch demo"}}

const Button = ({onClick, checked}) => {
  return (
    <>
      <PinkSwitch checked={checked} onClick={onClick} {...label} />
    </>
  )
}

export default Button
