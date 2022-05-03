import { registerDecorator } from "class-validator";
import { isSnilsValid } from "@/service.ts";

export function IsCorrectSnils(_: string | null, validationOptions?: any) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: "isCorrectSnils",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          return isSnilsValid(value);
        },
      },
    });
  };
}

