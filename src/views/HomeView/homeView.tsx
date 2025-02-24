import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {HomeViewStyles} from './homeView.styles';
import { SuperHeader } from "../../components/SuperHeader/superHeader.tsx";
import { GenericContainerView } from "../../components/GenericContainerView/GenericContainerView.tsx";
import { SuperSwitch } from "../../components/SuperSwitch/superSwitch.tsx";
import { SuperInput } from "../../components/SuperInput/SuperInput.tsx";
import { useTranslation } from "react-i18next";
import { usePlanets } from "../../hooks/usePlanets.ts";
import { useContext, useEffect, useState } from "react";
import { Planet } from "../../shared/interfaces/Planet.ts";
import { SuperCard } from "../../components/SuperCard/superCard.tsx";
import { DataContext } from "../../context/DataContext.tsx";
import IconSortFromBottom from '../../assets/svg/icons/sort-from-bottom-to-top.svg';
import IconSortFromTopToBottom from '../../assets/svg/icons/sort-from-top-to-bottom.svg';
import { HomeViewProps } from "../../navigation/router.types.ts";
import { Colors } from "../../shared/styles/Colors.ts";

export const HomeView = ({navigation}: HomeViewProps) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [planetsFiltered, setPlanetsFiltered] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [showSortFromBottomToTop, setShowSortFromBottomToTop] = useState<boolean>(false);
  const { data, setData } = useContext(DataContext);
  const { getAllPlanets } = usePlanets();
  const { t } = useTranslation();

  const IconProperties = {
    width: 30,
    height: 30,
    color: Colors.primary,
  }

  const getPlanets = async () => {
    setIsLoading(true);
    try {
      const response = await getAllPlanets();
      const planetList = response.filter((planet: Planet) => planet.isPlanet);
      setPlanets(planetList);
      setData({...data, planetList: planetList});
      setPlanetsFiltered(planetList);
      setShowSortFromBottomToTop(false);
    } catch (error) {
      console.error('getPlanets ::: ', error);
    } finally {
      setIsLoading(false);
    }
  }

  const validateName = (name: string) => {
      const withNormalizedAccents = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const withoutSpaces = withNormalizedAccents.replace(/\s+/g, "");
      return 'planets.' + withoutSpaces;
  }

  const filterPlanets = (text: string) => {
    if (text === '' || text.length < 2) {
      setPlanetsFiltered(planets);
      return;
    }
    const filtered = planets.filter((planet: Planet) => {
      const name = t(validateName(planet.name)).toLowerCase();
      return name.includes(text.toLowerCase());
    });
    setPlanetsFiltered(filtered);
  }

  const isFavorite = (id: string) => {
    return data.favoriteList.includes(id);
  }

  const sortPlanets = (fromBottomToTop: boolean) => {
    setShowSortFromBottomToTop(fromBottomToTop);
    const sorted = planetsFiltered.filter((planet: Planet) => planet.isPlanet).sort((a: Planet, b: Planet) => {
      const firstName = t(validateName(a.name)).toLowerCase();
      const secondName = t(validateName(b.name)).toLowerCase();
      if (fromBottomToTop) {
        return firstName.localeCompare(secondName);
      }
      return secondName.localeCompare(firstName);
    });
    setPlanetsFiltered(sorted);
  }

  const goToDetail = (id: string) => {
    navigation.navigate('DetailPlanetView', {id});
  }

  const goToSettings = () => {
    navigation.navigate('SettingsView');
  }

  const validationShowEmpty = (): boolean => {
    const validation = (!isLoading && planetsFiltered.length === 0) || showFavorites && data.favoriteList.length === 0;
    return validation;
  }

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <GenericContainerView>
      <ScrollView style={HomeViewStyles.container}>
        <SuperHeader actionClick={goToSettings} />
        <SuperSwitch setShowFavorites={setShowFavorites} />
        <SuperInput placeholder={t('home.placeholder')} onChangeText={filterPlanets} label={''} />
        <View style={HomeViewStyles.containerFilters}>
          {
            showSortFromBottomToTop ? (
              <TouchableOpacity onPress={() => sortPlanets(false)}>
                <IconSortFromTopToBottom {...IconProperties} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => sortPlanets(true)}>
                <IconSortFromBottom {...IconProperties} />
              </TouchableOpacity>
            )
          }
        </View>
        {
          isLoading && (
            <Text style={HomeViewStyles.notFound}>{t('home.loading')}</Text>
          )
        }
        {
          validationShowEmpty() && (
            <Text style={HomeViewStyles.notFound}>{t('home.notFound')}</Text>
          )
        }
        {
          !isLoading && planetsFiltered.map((planet: Planet) => {
            if (!planet.isPlanet) {
              return null;
            }
            if (showFavorites && !isFavorite(planet.id)) {
              return null;
            }
            return (
              <SuperCard
                actionPress={() => goToDetail(planet.id)}
                text={t(validateName(planet.name))}
                id={planet.id}
                key={planet.id} />
            );
          })
        }
      </ScrollView>
    </GenericContainerView>
  );
};
