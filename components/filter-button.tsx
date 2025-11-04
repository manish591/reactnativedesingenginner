import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

export function FilterButton() {
  return (
    <Pressable style={styles.button}>
      <Ionicons name="options-outline" color="white" size={20} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexShrink: 0,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5c5d7d',
    borderRadius: 12,
  },
});
