import { MinLength, MaxLength, Min, Max, registerDecorator } from "class-validator";

export function IsCorrectSnils(_:any,validationOptions?: any) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCorrectSnils',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args) {

          return isSnilsValid(value)
        },
      },
    });
  };
}

export class Patient {

  public readonly id: string;
  @MinLength(1)
  @MaxLength(20)
  public name: string;
  @MinLength(1)
  @MaxLength(20)
  public surname: string;
  @MinLength(1)
  @MaxLength(20)
  public secondName: string;
  @MinLength(1)
  public birthdate: string;
  public gender: string;
  @IsCorrectSnils(null, { message:'Некорректный снилс'})
  public snils: string;
  @Min(1)
  @Max(250)
  public weight: string;
  @Min(1)
  @Max(250)
  public height: string;

  constructor(
    id: string,
    name: string,
    surname: string,
    secondName: string,
    birthdate: string,
    gender: string,
    snils: string,
    weight: string,
    height: string,
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.secondName = secondName;
    this.birthdate = birthdate;
    this.gender = gender;
    this.snils = snils;
    this.weight = weight;
    this.height = height;
  }
  getName(): string {
    return this.name
  }
}

export const calculate_age = (birthdate: string): number  => {

  const convertedDate = birthdate.split('-').map((num: string) => Number(num));
  const dayOfBirth = new Date(convertedDate[0],convertedDate[1],convertedDate[2])
  const diff_ms = Date.now() - dayOfBirth.getTime();
  const age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
function isSnilsValid(input: string){
  let converted = String(input).replace(/[^0-9]+/g, '');
  if( converted.length == 11 ) {
    var checksum = 0;
    for( var i = 0; i < 9; i++ ) {
      checksum += parseInt(converted.charAt(i)) * (9 - i);
    }
    if( checksum > 101 ) {
      checksum = checksum % 101;
    }
    if( checksum == 100 || checksum == 101 ) {
      checksum = 0;
    }
    return checksum === parseInt(converted.substr(9));
  }
  return false;
}