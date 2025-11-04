import { POKIMON_CARD_COLOR, POKIMON_DATA } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const tabs = [
  'Forms',
  'Details',
  'Types',
  'Stats',
  'Weapon',
  'Abilities',
  'Styles',
];

export default function PokimonDetailsScreen() {
  const [activeTab, setActiveTab] = useState('Forms');
  const { pokimonId } = useLocalSearchParams();
  const pokimon = POKIMON_DATA.find(
    (pokimon) => String(pokimon.id) === pokimonId,
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          header: () => {
            return (
              <View
                style={{
                  height: 150,
                  paddingInline: 30,
                  backgroundColor: '#f4fbfb',
                }}
              >
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    paddingBottom: 20,
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                    }}
                  >
                    <Pressable
                      style={{
                        marginLeft: -3,
                        marginTop: 4,
                      }}
                      onPress={() => {
                        router.back();
                      }}
                    >
                      <Ionicons
                        name="arrow-back-outline"
                        color="#2d2e52"
                        size={24}
                      />
                    </Pressable>
                    <View
                      style={{
                        flex: 1,
                      }}
                    >
                      <Text
                        style={{
                          color: '#2d2e52',
                          fontSize: 28,
                          fontWeight: 'bold',
                          textTransform: 'capitalize',
                          textAlign: 'center',
                        }}
                      >
                        {pokimon?.name}
                      </Text>
                      <Text
                        style={{
                          color: '#2d2e5291',
                          fontSize: 16,
                          textAlign: 'center',
                        }}
                      >
                        {Number(pokimon?.id) < 10
                          ? `00${pokimon?.id}`
                          : `0${pokimon?.id}`}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          },
        }}
      />
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        style={{
          flex: 1,
          backgroundColor: '#f4fbfb',
        }}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            padding: 30,
          }}
        >
          <ScrollView>
            <View
              style={{
                width: '100%',
                height: 400,
                borderRadius: 20,
                backgroundColor: POKIMON_CARD_COLOR[pokimon?.types as string],
              }}
            >
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src={pokimon?.sprites.front_default as string}
              />
            </View>
            <View
              style={{
                marginTop: 30,
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {tabs.map((tab) => (
                  <TouchableOpacity
                    key={tab}
                    onPress={() => setActiveTab(tab)}
                    style={{
                      marginRight: 16,
                    }}
                  >
                    <Text
                      style={{
                        color: activeTab === tab ? '#2d2e52' : '#2d2e525a',
                        fontWeight: '700',
                        fontSize: 18,
                      }}
                    >
                      {tab}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBlock: 20,
                }}
              >
                <View
                  style={{
                    width: '100%',
                  }}
                >
                  <Text
                    style={{
                      color: '#2d2e5291',
                      fontSize: 14,
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Esse aliquam molestias assumenda, illo earum a repellat iste
                    nobis fugiat, cupiditate odit excepturi numquam nisi
                    laboriosam pariatur quos! Quo, ab distinctio. Consectetur,
                    natus? Expedita reprehenderit aperiam voluptate consectetur.
                    Tenetur eaque facilis sapiente omnis placeat quae minima.
                    Velit non dolor voluptatibus obcaecati expedita numquam
                    animi. Corporis itaque provident est maxime aliquid
                    officiis.
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
