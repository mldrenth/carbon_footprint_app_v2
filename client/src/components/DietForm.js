import Slider from "@mui/material/Slider";
import { InputLabel } from "@mui/material";

const DietForm = ({
  meatServings,
  dairyServings,
  vegServings,
  handleMeatSelected,
  handleDairySelected,
  handleVegSelected,
}) => {
  const onMeatSelected = (event) => {
    handleMeatSelected(event);
    
  };
  const onDairySelected = (event) => {
    handleDairySelected(event);
  };
  const onVegSelected = (event) => {
    handleVegSelected(event);
  };

  const dietPick = [
    {
      value: 3,
      label: "3",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 1,
      label: "1 (average)",
    },
    {
      value: 0,
      label: "0",
    },
  ];

  return (
    <form id="diet-form">
      <h2 id="diet-header">Diet</h2>
      <popover />

      <InputLabel id="diet-meat"> Your daily serving of meat & fish</InputLabel>

      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={dietPick}
        id="meat-servings"
        onChange={onMeatSelected}
        type="range"
        color="primary"
        min={0}
        max={3}
        step={0.25}
        value={meatServings}
      ></Slider>
      <br />
      <InputLabel id="diet-dairy"> Your daily serving of dairy</InputLabel>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={dietPick}
        id="dairy servings"
        onChange={onDairySelected}
        type="range"
        color="primary"
        min={0}
        max={3}
        step={0.25}
        value={dairyServings}
      ></Slider>
      <br />
      <InputLabel id="diet-veg"> Your daily serving of vegetables</InputLabel>
      <Slider
        size="small"
        valueLabelDisplay="auto"
        marks={dietPick}
        id="dairy servings"
        onChange={onVegSelected}
        type="range"
        color="primary"
        min={0}
        max={3}
        step={0.25}
        value={vegServings}
      ></Slider>
    </form>
  );
};

export default DietForm;
