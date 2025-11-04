import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';

export function SearchBox() {
  return (
    <View style={styles.container}>
      <View style={styles.searchIconContainer}>
        <Ionicons name="search-outline" color="#2d2e52" size={20} />
      </View>
      <TextInput style={styles.inputBox} placeholder="Name or Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: '#ebf3f5',
    borderRadius: 12,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    flex: 1,
    height: 40,
  },
});
