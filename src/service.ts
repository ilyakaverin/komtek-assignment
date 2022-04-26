export const calculate_age = (birthdate: string): number => {
  const convertedDate = birthdate.split("-").map((num: string) => Number(num));
  const dayOfBirth = new Date(
    convertedDate[0],
    convertedDate[1],
    convertedDate[2]
  );
  const diff_ms = Date.now() - dayOfBirth.getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

export const isSnilsValid = (input: string) => {
  const converted = String(input).replace(/[^0-9]+/g, "");
  if (converted.length == 11) {
    let checksum = 0;
    for (let i = 0; i < 9; i++) {
      checksum += parseInt(converted.charAt(i)) * (9 - i);
    }
    if (checksum > 101) {
      checksum = checksum % 101;
    }
    if (checksum == 100 || checksum == 101) {
      checksum = 0;
    }
    return checksum === parseInt(converted.substr(9));
  }
  return false;
};
