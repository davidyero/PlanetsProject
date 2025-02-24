import { Text, TouchableOpacity, View } from "react-native";
import {SuperCardStyles} from './superCard.styles';
import {SuperCardType} from './superCard.type';
import StarIcon from '../../assets/svg/icons/star.svg';
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext.tsx";
import { Colors } from "../../shared/styles/Colors.ts";
import { useLocalStorage } from "../../hooks/useLocalStorage.ts";
import { LOCAL_STORAGE } from "../../shared/constants/LocalStorageConstants.ts";

export const SuperCard = ({id, text, actionPress}: SuperCardType) => {
  const {data, setData} = useContext(DataContext);
  const {setItem, getItem} = useLocalStorage();
  const iconProperties = {
    width: 20,
    height: 20,
    fill: Colors.primary,
  }
  const iconPropertiesFavorite = {
    width: 20,
    height: 20,
    fill: Colors.secondary,
  }

  const setFavorite = () => {
    const favoriteList = data.favoriteList;
    const index = favoriteList.indexOf(id);
    if (index > -1) {
      favoriteList.splice(index, 1);
    } else {
      favoriteList.push(id);
    }
    setData({...data, favoriteList});
    setItem(LOCAL_STORAGE.FAVORITES, JSON.stringify(favoriteList));
  }

  const isFavorite = () => {
    return data.favoriteList.includes(id);
  }

  const initialize = async () => {
    const favorites = await getItem(LOCAL_STORAGE.FAVORITES);
    if (favorites) {
      setData({...data, favoriteList: JSON.parse(favorites)});
    }
  }

  const handleClick = () => {
    actionPress(id);
  }

  useEffect(() => {
    initialize();
  }, []);

  return (
    <TouchableOpacity style={SuperCardStyles.container} onPress={handleClick}>
      <Text style={SuperCardStyles.text}>{text}</Text>
      <TouchableOpacity onPress={setFavorite}>
        <StarIcon {...(isFavorite() ? iconPropertiesFavorite : iconProperties)} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
