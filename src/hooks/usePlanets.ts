import { useApi } from './useApi.ts';
import { Planet } from "../shared/interfaces/Planet.ts";
import { DataContext } from "../context/DataContext.tsx";
import { useContext } from "react";

export const usePlanets = () => {
  const { API_GET } = useApi();
  const { data } = useContext(DataContext);

  const getAllPlanets = async (): Promise<Planet[]> => {
    if (data.planetList.length > 0) {
      return data.planetList;
    }
    try {
      const response = await API_GET('rest/bodies?filter[isPlanet]=true');
      return response.bodies;
    } catch (error) {
      console.error('getAllPlanets', error);
      throw error;
    }
  };

  return {
    getAllPlanets,
  };
};
