import {
  MinLength,
  MaxLength,
  Min,
  IsOptional,
  IsPositive,
  MaxDate,
  IsNotEmpty,
  Length,
} from "class-validator";
import { IsCorrectSnils } from "@/decorators";
import { correctBirthDate } from "@/service";

export class Patient {
  static currentDate: Date = new Date();

  public readonly id: string;
  @MinLength(1, { message: "Минимальная длина: 1 символ" })
  @MaxLength(20, { message: "Максимальная длина: 20 символов" })
  public name: string;
  @MinLength(1, { message: "Минимальная длина: 1 символ" })
  @MaxLength(20, { message: "Максимальная длина: 20 символов" })
  public surname: string;
  @IsOptional()
  @MaxLength(20, { message: "Максимальная длина: 20 символов" })
  public secondName: string;
  @IsNotEmpty({ message: "Поле не может быть пустым" })
  @MaxDate(Patient.currentDate, {
    message: "Дата не может быть больше сегодняшней",
  })
  public birthdate: Date;
  public gender: string;
  @Length(11, 11, { message: "Некорректный формат" })
  @IsCorrectSnils(null, { message: "Некорректная контрольная сумма" })
  public snils: string;
  @Min(1, { message: "Минимальный вес: 1кг" })
  @IsPositive({ message: "Число не может быть отрицательным" })
  public weight: number;
  @Min(1, { message: "Минимальный рост: 1см" })
  @IsPositive({ message: "Число не может быть отрицательным" })
  public height: number;

  constructor(
    id: string,
    name: string,
    surname: string,
    secondName: string,
    birthdate: string,
    gender: string,
    snils: string,
    weight: number,
    height: number
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.secondName = secondName === undefined ? " " : secondName;
    this.birthdate = correctBirthDate(birthdate) as Date;
    this.gender = gender;
    this.snils = snils;
    this.weight = Number(weight);
    this.height = Number(height);
  }
  getSearchString() {
    return `${this.surname} ${this.name} ${this.secondName} ${this.snils}`;
  }
}

export class Consultation {
  consultId: string;
  userid: string;
  date: string;
  time: string;
  simptoms: string;

  constructor(
    consultId: string,
    userid: string,
    date: string,
    time: string,
    simptoms: string
  ) {
    this.userid = userid;
    this.consultId = consultId;
    this.date = date;
    this.time = time;
    this.simptoms = simptoms;
  }
}
