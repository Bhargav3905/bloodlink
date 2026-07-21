const BLOOD_GROUPS = Object.freeze([
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
]);

export const bloodGroupOptions = [
  {
    label: 'Select Blood Group',
    value: '',
  },
  ...BLOOD_GROUPS.map((group) => ({
    label: group,
    value: group,
  })),
];