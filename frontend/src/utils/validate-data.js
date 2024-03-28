export function validateData(data) {
  if (!data || !data.email || !data.password) return false;

  const isGenderOnData = data.gender;
  const isGenderValid = data.gender == "M" || data.gender == "F";
  if (isGenderOnData && !isGenderValid) return false;

  const isAgeOnData = data.age;
  const isAgeValid = data.age >= 8 && data.age <= 100;
  if (isAgeOnData && !isAgeValid) return false;

  if (data.password.length < 8) return false;

  return true;
}
