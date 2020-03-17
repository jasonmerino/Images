import React, { FC, useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../components/text.component";
import { PopularCategory } from "../components/popular-category.component";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Padding } from "../components/padding.component";
import { space1 } from "../theme/space.theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { IRootReducer } from "../store";
import { SearchItem } from "../components/search-item.component";
import { getImages } from "../actions/search.actions";

const styles = StyleSheet.create({
  category: {
    width: 300
  }
});

const POPULAR = "";

export const HomeScreen: FC = () => {
  const dispatch = useDispatch();
  const browseImages = useSelector((state: IRootReducer) => {
    return state.search.searches[POPULAR] || [];
  });
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getImages(POPULAR));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Padding all={space1}>
          <Text size="large">Popular Categories</Text>
        </Padding>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            { image: require("../images/waves.jpg"), text: "Waves" },
            { image: require("../images/people.jpg"), text: "People" },
            { image: require("../images/space.jpg"), text: "Space" }
          ].map(category => (
            <Padding all={space1} key={category.text} style={styles.category}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("SearchResults", {
                    searchTerm: category.text
                  })
                }
              >
                <PopularCategory text={category.text} image={category.image} />
              </TouchableOpacity>
            </Padding>
          ))}
        </ScrollView>
        <Padding all={space1}>
          <Text size="large">Popular</Text>
        </Padding>
        {browseImages.map(item => (
          <SearchItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
