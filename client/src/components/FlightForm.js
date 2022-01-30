import { Slider, InputLabel } from "@mui/material";

const FlightForm = ({
  numDomestic,
  numShortHaul,
  numLongHaul,
  handleDomesticChange,
  handleShortChange,
  handleLongChange,
}) => {
  const onDomesticChange = (event) => {
    handleDomesticChange(event);
  };

  const onShortChange = (event) => {
    handleShortChange(event);
  };

  const onLongChange = (event) => {
    handleLongChange(event);
  };

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 20,
      label: "20",
    },
  ];

  return (
    <form id="flight-form">
      <h4 id="flight-header">How often do you fly? (includes return)</h4>
      <InputLabel htmlFor="domestic">Domestic: </InputLabel>

      <Slider
        size="small"
        color="primary"
        id="domestic"
        valueLabelDisplay="auto"
        value={numDomestic}
        onChange={onDomesticChange}
        min={0}
        max={20}
        marks={marks}
      />
      <br />
      <InputLabel htmlFor="shortHaul">Short Haul: </InputLabel>

      <Slider
        size="small"
        color="primary"
        valueLabelDisplay="auto"
        value={numShortHaul}
        min={0}
        max={20}
        marks={marks}
        onChange={onShortChange}
      />
      <br />
      <InputLabel htmlFor="longHaul">Long Haul: </InputLabel>

      <Slider
        size="small"
        color="primary"
        valueLabelDisplay="auto"
        id="longHaul"
        min={0}
        max={20}
        marks={marks}
        value={numLongHaul}
        onChange={onLongChange}
      />
    </form>
  );
};

export default FlightForm;
