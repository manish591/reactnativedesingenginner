import { FilterButton } from '@/components/filter-button';
import { SearchBox } from '@/components/search-box';
import { POKIMON_CARD_COLOR, POKIMON_DATA } from '@/constants';
import { router } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.headerContentContainer}>
          <Text style={styles.headerTitle}>Pokedex</Text>
          <Text style={styles.headerDescription}>
            Search for a pokemon by name or using its national pokedex number
          </Text>
        </View>
        <View style={styles.headerActionsContainer}>
          <SearchBox />
          <FilterButton />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          {POKIMON_DATA.map((pokimon) => {
            return (
              <View key={pokimon.id} style={styles.cards}>
                <Pressable
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 12,
                    backgroundColor: POKIMON_CARD_COLOR[pokimon.types],
                    padding: 20,
                  }}
                  onPress={() => {
                    router.push(`/${pokimon.id}`);
                  }}
                >
                  <View
                    style={{
                      height: '70%',
                    }}
                  >
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      src={pokimon.sprites.front_default as string}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 'auto',
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: '500',
                        textAlign: 'center',
                        fontSize: 16,
                        color: '#2d2e52',
                        textTransform: 'capitalize',
                      }}
                    >
                      {pokimon.name}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 14,
                        color: '#2d2e5291',
                      }}
                    >
                      {Number(pokimon.id) < 10
                        ? `00${pokimon.id}`
                        : `0${pokimon.id}`}
                    </Text>
                  </View>
                </Pressable>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f4fbfb',
  },
  headerContentContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    maxWidth: '90%',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2d2e52',
  },
  headerDescription: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#2d2e5291',
  },
  headerActionsContainer: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
    marginBottom: 10,
  },
  cardsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: '6%',
    rowGap: 20,
  },
  cards: {
    width: '47%',
    height: 250,
    borderRadius: 12,
  },
});
