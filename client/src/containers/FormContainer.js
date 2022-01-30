import { useEffect, useState } from "react";
import CarForm from "../components/CarForm";
import Electricity from "../components/Electricity";
import DietForm from "../components/DietForm";
import FlightForm from "../components/FlightForm";
import "./FormContainer.css";
import { Tabs, Tab, Box, Paper } from '@mui/material'
import { TabList, TabPanel, TabContext }  from '@mui/lab'
import BoltIcon from '@mui/icons-material/Bolt';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CommuteIcon from '@mui/icons-material/Commute';


const FormContainer = ({
  handleCarCalculation,
  climateData,
  handleDietCalculation,
  handleElectricityCalculation,
  handleFlightCalculation,
}) => {
  // Electricity State
  const [energyUsage, setEnergyUsage] = useState(4500);

  // Diet State
  const [meatServings, setMeatServings] = useState(0);
  const [dairyServings, setDairyServings] = useState(0);
  const [vegServings, setVegServings] = useState(0);
  const [averageMeatCo2, setAverageMeatCo2] = useState(0);
  const [averageDairyCo2, setAverageDairyCo2] = useState(0);
  const [averageVegCo2, setAverageVegCo2] = useState(0);

  // Car State
  const [co2PerMile, setCo2PerMile] = useState(0);
  const [yearlyMileage, setYearlyMileage] = useState(0);
  const [fuelType, setFuelType] = useState(null);
  const [carSize, setCarSize] = useState(null);
  const [hasCar, setHasCar] = useState(false);

  // Flight State
  const [numDomestic, setNumDomestic] = useState(0);
  const [numShortHaul, setNumShortHaul] = useState(0);
  const [numLongHaul, setNumLongHaul] = useState(0);
  const [co2Domestic, setCo2Domestic] = useState(0);
  const [co2ShortHaul, setCo2ShortHaul] = useState(0);
  const [co2LongHaul, setCo2LongHaul] = useState(0);



  //Electricity Handlers
  useEffect(() => {
    handleElectricityCalculation(energyUsage);
  }, [energyUsage]);

  const handleElectricityChange = (eve) => {
    setEnergyUsage(eve.target.value)
  };

  //Diet Handlers
  useEffect(() => {
    handleDietCalculation(meatServings, vegServings, dairyServings, averageMeatCo2, averageVegCo2, averageDairyCo2);
  }, [meatServings, vegServings, dairyServings]);

  const handleMeatSelected = (event) => {
    setMeatServings(event.target.value);
    setAverageMeatCo2(climateData[1].diet["averageMeat"]);
  };

  const handleDairySelected = (event) => {
    setDairyServings(event.target.value);
    setAverageDairyCo2(climateData[1].diet["averageDairy"]);
  };

  const handleVegSelected = (event) => {
    setVegServings(event.target.value);
    setAverageVegCo2(climateData[1].diet["averageVeg"]);
  
  };

  // Car Handlers

  useEffect(() => {
    handleCarCalculation(co2PerMile, yearlyMileage);
  }, [co2PerMile, yearlyMileage, hasCar]);

  const handleMileageChange = (evt) => {
    setYearlyMileage(evt.target.value);
  };

  const handleFuelSelected = (evt) => {
    const selectedFuel = evt.target.value;
    setFuelType(evt.target.value);
    setCo2PerMile(climateData[0].drivingKgCO2ePerMile[selectedFuel][carSize]);
  };

  const handleSizeSelected = (evt) => {
    const selectedSize = evt.target.value;
    setCarSize(evt.target.value);
    setCo2PerMile(climateData[0].drivingKgCO2ePerMile[fuelType][selectedSize]);
  };

  const handleHasCarSelected = (evt) => {
    setHasCar(evt.target.value)
    if (evt.target.value) {
      setYearlyMileage(7800)
      setFuelType('petrol')
      setCarSize('medium')
      setCo2PerMile(0.29)
    }
    else {
      setYearlyMileage(0)
    }
  }
  // Flight Handlers
  useEffect(() => {
    handleFlightCalculation(
      numDomestic,
      numShortHaul,
      numLongHaul,
      co2Domestic,
      co2ShortHaul,
      co2LongHaul
    );
  }, [
    co2Domestic,
    co2ShortHaul,
    co2LongHaul,
    numDomestic,
    numShortHaul,
    numLongHaul,
  ]);

  const handleDomesticChange = (event) => {
    setNumDomestic(event.target.value);
    setCo2Domestic(climateData[4].flights["domestic"]);
  };

  const handleShortChange = (event) => {
    setNumShortHaul(event.target.value);
    setCo2ShortHaul(climateData[4].flights["shortHaul"]);
  };

  const handleLongChange = (event) => {
    setNumLongHaul(event.target.value);
    setCo2LongHaul(climateData[4].flights["longHaul"]);
  };

  // Tabs
  const [currentTab, setCurrentTab] = useState('electricity')
  const handleChange = (eve,newValue) => {
    setCurrentTab(newValue)
  }

  return (

    <Paper elevation={18}id="forms-container">
      <TabContext value={currentTab}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList textColor='primary' indicatorColor="primary" onChange={handleChange} value={currentTab}>
        <Tab icon={<BoltIcon/>}label="Electricity" value="electricity"></Tab>
        <Tab icon={<FastfoodIcon/>} label="Diet" value="diet"></Tab>
        <Tab icon={<CommuteIcon/>} label="Transport" value="transport"></Tab>
      </TabList>
      </Box >
      </TabContext>
      {currentTab === 'electricity' ?
        <Electricity
          handleElectricityCalculation={handleElectricityCalculation}
          climateData={climateData}
          energyUsage={energyUsage}
          handleElectricityChange={handleElectricityChange}
        />
        : currentTab === 'diet' ?
          <DietForm
            climateData={climateData}
            handleDietCalculation={handleDietCalculation}
            meatServings={meatServings}
            dairyServings={dairyServings}
            vegServings={vegServings}
            averageMeatCo2={averageMeatCo2}
            averageDairyCo2={averageDairyCo2}
            averageVegCo2={averageVegCo2}
            handleMeatSelected={handleMeatSelected}
            handleDairySelected={handleDairySelected}
            handleVegSelected={handleVegSelected}
          />
          : currentTab === 'transport' ?
            <div id="transport-div">
              <CarForm
                handleCarCalculation={handleCarCalculation}
                climateData={climateData}
                co2PerMile={co2PerMile}
                yearlyMileage={yearlyMileage}
                fuelType={fuelType}
                carSize={carSize}
                hasCar={hasCar}
                handleMileageChange={handleMileageChange}
                handleFuelSelected={handleFuelSelected}
                handleSizeSelected={handleSizeSelected}
                handleHasCarSelected={handleHasCarSelected}
              />

              <FlightForm
                climateData={climateData}
                handleFlightCalculation={handleFlightCalculation}
                numDomestic={numDomestic}
                numShortHaul={numShortHaul}
                numLongHaul={numLongHaul}
                co2Domestic={co2Domestic}
                co2ShortHaul={co2ShortHaul}
                co2LongHaul={co2LongHaul}
                handleDomesticChange={handleDomesticChange}
                handleShortChange={handleShortChange}
                handleLongChange={handleLongChange}

              />
            </div>
            : null}

    </Paper>

  );
};

export default FormContainer;
