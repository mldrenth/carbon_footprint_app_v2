import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";


const CarForm = ({
  yearlyMileage,
  fuelType,
  carSize,
  hasCar,
  handleMileageChange,
  handleFuelSelected,
  handleSizeSelected,
  handleHasCarSelected,
}) => {
  const onMileageChange = (evt) => {
    handleMileageChange(evt);
  };

  const onFuelSelected = (evt) => {
    handleFuelSelected(evt);
  };

  const onSizeSelected = (evt) => {
    handleSizeSelected(evt);
  };

  const onHasCarSelected = (evt) => {
    handleHasCarSelected(evt);
  };

  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 7800,
      label: "Average UK Family",
    },
    {
      value: 30000,
      label: "30000",
    },
  ];

  return (
    <div id="car-form">
      <h2 id="car-header">Transport</h2>
      <InputLabel htmlFor="car-number"> Do you own a car? </InputLabel>
      <Select
        id="car-number"
        min={0}
        type="number"
        value={hasCar}
        onChange={onHasCarSelected}
        size="small"
        color="primary"
      >
        <MenuItem value={true}>Yes</MenuItem>
        <MenuItem value={false}>No</MenuItem>
      </Select>
      <br />
      {hasCar ? (
        <div id="car-questions-div">
          <div id="car-options">
            <FormControl fullwidth>
              <div id="fuel-type-div">
                <InputLabel htmlFor="fuel-type" color="success">
                  Fuel type{" "}
                </InputLabel>
                <Select
                  size="small"
                  id="fuel-type"
                  onChange={onFuelSelected}
                  value={fuelType}
                  color="primary"
                  label="Fuel Type"
                >
                  <MenuItem value="petrol">Petrol (standard)</MenuItem>
                  <MenuItem value="diesel">Diesel</MenuItem>
                </Select>
              </div>
            </FormControl>
            <FormControl>
              <div id="car-size-div">
                <InputLabel htmlFor="car-size" color="success">
                  Car size{" "}
                </InputLabel>
                <Select
                  size="small"
                  id="car-size"
                  onChange={onSizeSelected}
                  value={carSize}
                  color="primary"
                  label="Car Size"
                >
                  <MenuItem value="small">Small</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="large">Large</MenuItem>
                </Select>
              </div>
            </FormControl>
          </div>
          <br />
          <InputLabel htmlFor="milesPerYear">Yearly mileage </InputLabel>
          <Slider
            marks={marks}
            size="small"
            valueLabelDisplay="auto"
            color="primary"
            step={500}
            min={0}
            max={30000}
            id="milesPerYear"
            type="number"
            value={yearlyMileage}
            onChange={onMileageChange}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CarForm;
