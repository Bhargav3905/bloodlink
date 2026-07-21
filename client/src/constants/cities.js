const GUJARAT_CITIES = Object.freeze([
  'Ahmedabad',
  'Nadiad',
  'Anand',
  'Vadodara',
  'Surat',
  'Rajkot',
  'Gandhinagar',
  'Bhavnagar',
  'Jamnagar',
  'Mehsana',
  'Bhuj',
  'Junagadh',
  'Veraval',
  'Patan',
  'Morbi',
  'Navsari',
  'Vapi',
  'Bharuch',
  'Himatnagar',
  'Palanpur',
]);

export const cityOptions = [
  {
    label: 'Select City',
    value: '',
  },
  ...GUJARAT_CITIES.map((city) => ({
    label: city,
    value: city,
  })),
];