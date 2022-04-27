import { MinLength, MaxLength, Min, Max } from "class-validator";
import { IsCorrectSnils } from "@/decorators";

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
  @IsCorrectSnils(null, { message: "Некорректный снилс" })
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
    height: string
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
