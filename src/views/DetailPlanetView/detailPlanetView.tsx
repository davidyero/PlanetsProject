import {Text, View} from 'react-native';
import {DetailPlanetViewStyles} from './detailPlanetView.styles';
import { DetailPlanetViewProps } from "../../navigation/router.types.ts";
import { GenericContainerView } from "../../components/GenericContainerView/GenericContainerView.tsx";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext.tsx";
import { Planet } from "../../shared/interfaces/Planet.ts";
import { useTranslation } from "react-i18next";

export const DetailPlanetView = ({navigation, route}: DetailPlanetViewProps) => {
  const {t} = useTranslation();
  const { id } = route.params;
  const {data} = useContext(DataContext);
  const [planet, setPlanet] = useState<Planet | null>(null);

  const getPlanet = () => {
    const planet = data.planetList.find((planet) => planet.id === id);
    if (!planet) {
      navigation.goBack();
    } else {
      setPlanet(planet);
    }
  }

  useEffect(() => {
    getPlanet();
  }, []);

  return (
    <GenericContainerView
      showHeader={true}
      title={t('detail.title')}
      goBack={() => navigation.goBack()}>
      <View style={DetailPlanetViewStyles.container}>
        <View style={DetailPlanetViewStyles.row}>
          <Text style={DetailPlanetViewStyles.title}>{t('detail.name')}:</Text>
          <Text style={DetailPlanetViewStyles.text}> {planet?.name}</Text>
        </View>
        <View style={DetailPlanetViewStyles.row}>
          <Text style={DetailPlanetViewStyles.title}>{t('detail.density')}:</Text>
          <Text style={DetailPlanetViewStyles.text}> {planet?.density}</Text>
        </View>
        <View style={DetailPlanetViewStyles.row}>
          <Text style={DetailPlanetViewStyles.title}>{t('detail.meanRadius')}:</Text>
          <Text style={DetailPlanetViewStyles.text}> {planet?.meanRadius}</Text>
        </View>
        <View style={DetailPlanetViewStyles.row}>
          <Text style={DetailPlanetViewStyles.title}>{t('detail.gravity')}:</Text>
          <Text style={DetailPlanetViewStyles.text}> {planet?.gravity}</Text>
        </View>
        <View style={DetailPlanetViewStyles.row}>
          <Text style={DetailPlanetViewStyles.title}>{t('detail.mass')}:</Text>
          <Text style={DetailPlanetViewStyles.text}> {planet?.mass.massValue}</Text>
        </View>
      </View>
    </GenericContainerView>
  );
};
