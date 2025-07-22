import AsyncStorage from '@react-native-async-storage/async-storage';

// ✅ Fixed schedule data (you can update later with real API)
const FIXED_SCHEDULES = {
  "2025-07-21": [
    { type: "Recycling", time: "10:00 AM" },
    { type: "Garbage", time: "6:30 PM" }
  ],
  "2025-07-22": [
    { type: "E-waste", time: "4:00 PM" }
  ],
  "2025-07-23": [
    { type: "Compost", time: "9:00 AM" }
  ],
  "2025-08-01": [
    { type: "Recycling", time: "8:30 AM" }
  ],
  "2025-09-05": [
    { type: "Garbage", time: "7:00 PM" }
  ]
};

// ✅ Save schedules to local storage
export async function saveSchedules() {
  try {
    await AsyncStorage.setItem('pickupSchedules', JSON.stringify(FIXED_SCHEDULES));
    console.log('✅ Schedules saved locally!');
  } catch (error) {
    console.error('❌ Error saving schedules:', error);
  }
}

// ✅ Get schedules from local storage
export async function getSchedules() {
  try {
    const data = await AsyncStorage.getItem('pickupSchedules');
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('❌ Error fetching schedules:', error);
    return {};
  }
}

// ✅ Clear schedules (optional utility)
export async function clearSchedules() {
  await AsyncStorage.removeItem('pickupSchedules');
  console.log('🗑️ Local schedules cleared!');
}
