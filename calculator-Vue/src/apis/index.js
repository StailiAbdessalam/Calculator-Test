import axios from 'axios';

const equalApi = async (params)=>{
    try {
      const response = await axios.post('http://127.0.0.1:8000/calculator', {
        current: params.current,
      });
      return response;
    } catch (error) {
      console.error(error); // Handle the error
    }
}

const CalculateEquationA = async (params)=>{
    
  try {
      const response = await axios.post('http://127.0.0.1:8000/EquationA', {
          valueA: params.valueA,
          valueB: params.valueB
      });
     return response
    } catch (error) {
      console.error(error); // Handle the error
    }
}

const CalculateEquationB = async (params)=>{
    
  try {
      const response = await axios.post('http://127.0.0.1:8000/EquationB', {
        valueA: params.valueA,
        valueB: params.valueB,
        valueC: params.valueC

       });
     return response
    } catch (error) {
      console.error(error); // Handle the error
    }
}

export {
  equalApi,
  CalculateEquationA,
  CalculateEquationB
}