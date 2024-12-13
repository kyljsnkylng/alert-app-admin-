import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const EditScreen = ({ route, navigation }) => {
  const { item, type, onSave } = route.params; // Receive item, type, and onSave callback
  const [form, setForm] = useState(item);

  const handleSave = () => {
    onSave(form, type); // Pass updated data back to parent
    navigation.goBack(); // Navigate back to the previous screen
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit {type === 'status' ? 'Status' : 'Evacuation Center'}</Text>
      {type === 'status' ? (
        <>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Name of Typhoon</Text>
            <TextInput
              style={styles.inputField}
              value={form.typhoonName}
              onChangeText={(text) => handleChange('typhoonName', text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Strength of Typhoon</Text>
            <TextInput
              style={styles.inputField}
              value={form.typhoonStrength}
              onChangeText={(text) => handleChange('typhoonStrength', text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Parts of Manila Affected</Text>
            <TextInput
              style={[styles.inputField, styles.textArea]}
              value={form.affectedAreas}
              onChangeText={(text) => handleChange('affectedAreas', text)}
              multiline
            />
          </View>
        </>
      ) : (
        <>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Center Name</Text>
            <TextInput
              style={styles.inputField}
              value={form.centerName}
              onChangeText={(text) => handleChange('centerName', text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Capacity</Text>
            <TextInput
              style={styles.inputField}
              value={form.capacity}
              onChangeText={(text) => handleChange('capacity', text)}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Contact Information</Text>
            <TextInput
              style={styles.inputField}
              value={form.contact}
              onChangeText={(text) => handleChange('contact', text)}
            />
          </View>
        </>
      )}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EditScreen;
