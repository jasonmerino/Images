import React, { useEffect, useState, FC } from "react";
import { TextInput } from "../components/text-input.component";
import { useSelector, useDispatch } from "react-redux";
import { IRootReducer } from "../store";
import { getImages } from "../actions/search.actions";
import { IPixabayHit } from "../types/pixabay-types";
import { SearchItem } from "../components/search-item.component";
import { StyleSheet, SectionList, Platform, Keyboard } from "react-native";
import { space1 } from "../theme/space.theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp } from "@react-navigation/native";
import { IRootStackParams } from "../navigators/main.navigator";

interface IProps {
  route: RouteProp<IRootStackParams, "SearchResults">;
}

const styles = StyleSheet.create({
  searchBox: {
    margin: space1,
    shadowColor: "rgba(0, 0, 0, .3)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 4
  }
});

const SEARCH_BOX = "SEARCH_BOX";

export const SearchResultsScreen: FC<IProps> = ({ route }) => {
  const { searchTerm } = route.params;

  const images = useSelector(function(state: IRootReducer) {
    return state.search.searches[searchTerm] || [];
  });
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getImages(route.params.searchTerm));
  }, []);

  function renderImage({ item }: { item: IPixabayHit }) {
    return <SearchItem item={item} />;
  }

  function handleSearchChange(searchText: string) {
    setSearch(searchText);
    dispatch(getImages(searchText));
  }

  function renderSearch() {
    return (
      <TextInput
        placeholder="Search"
        onChangeText={handleSearchChange}
        value={search}
        style={styles.searchBox}
        clearButtonMode="always"
        returnKeyType="done"
      />
    );
  }

  return (
    <SafeAreaView>
      {Platform.OS === "android" && renderSearch()}
      <SectionList
        // we add onScrollBeginDrag here instead of keyboardDismissMode
        // because of this bug on Android
        // https://github.com/facebook/react-native/issues/23364
        onScrollBeginDrag={Keyboard.dismiss}
        renderSectionHeader={Platform.OS === "ios" && renderSearch}
        sections={[{ title: SEARCH_BOX, data: images }]}
        renderItem={renderImage}
        keyExtractor={item => item.webformatURL}
      />
    </SafeAreaView>
  );
};
