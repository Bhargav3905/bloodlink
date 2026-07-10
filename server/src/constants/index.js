export const USER_ROLES = Object.freeze({
  ADMIN: "admin",
  DONOR: "donor",
  HOSPITAL: "hospital",
  PATIENT: "patient",
});

export const REQUEST_STATUS = Object.freeze({
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  PAYMENT_PENDING: "payment_pending",
  COMPLETED: "completed",
  EXPIRED: "expired",
});

export const PAYMENT_STATUS = Object.freeze({
  PENDING: "pending",
  SUCCESS: "success",
  FAILED: "failed",
});

export const DONATION_STATUS = Object.freeze({
  PENDING: "pending",
  VERIFIED: "verified",
  REJECTED: "rejected",
});

export const BLOOD_GROUPS = Object.freeze([
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
]);

export const GUJARAT_CITIES = Object.freeze([
  "Ahmedabad",
  "Nadiad",
  "Anand",
  "Vadodara",
  "Surat",
  "Rajkot",
  "Gandhinagar",
  "Bhavnagar",
  "Jamnagar",
  "Mehsana",
  "Bhuj",
  "Junagadh",
  "Veraval",
  "Patan",
  "Morbi",
  "Navsari",
  "Vapi",
  "Bharuch",
  "Himatnagar",
  "Palanpur",
]);

export const DONATION_COOLDOWN_DAYS = 90;
