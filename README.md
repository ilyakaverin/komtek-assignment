# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Комтек ТЗ Frontend

## Описание

Необходимо спроектировать и разработать учетную систему “Консультации”. Основная цель которого автоматизации работы с консультациями пациентов.

## Сущности

1. Пациент
   1. **Фамилия [строка];**
   2. **Имя [строка];**
   3. Отчество [строка];
   4. **Дата рождения [дата];**
   5. **Пол [строка];**
   6. **СНИЛС [строка] - необходимо проверить формат и контрольную сумму.**
   7. Физиологические данные пациента: Вес, Рост, Возраст;
2. Консультация
   1. **Дата [date] - выбор с помощью компонента date picker (предусмотреть рабочий график с 08:00 до 20:00);**
   2. **Время время в формате HH:mm;**
   3. Симптомы - [текст] - Симптомы пациента.

Поля выделенные жирным обязательны.

## Формы

1. Пациент — операции добавления/удаления/редактирования пациента;
   1. Страница с таблицей содержащая список всех пациентов с возможностью поиска по ФИО и СНИЛС, возможность сортировать по заголовкам таблицы;
   2. Страница создания пациента с валидацией;
   3. Страница редактирования пациента;
   4. Страница просмотра данных пациента с таблицей всех его консультаций;
   5. Удаление пациента.
2. Консультации — операции добавления/удаления/редактирования консультаций;
   1. Страница добавления консультации для пациента(предусмотреть возможность запрета добавления, при условии, если уже существует консультация для пациента в это же время);
   2. Страница редактирования;
   3. Удаление.

Необходимо реализовать валидацию данных по форматам полей и признаку обязательности.

## Технологический стек

- Frontend
  - Vue
  - Vuex (для каждой сущности свой модуль)
  - Vuetify (не обязательно)

## Критерии оценки

- Выполнение требований ТЗ.
- Читаемость программного кода (отступы, разделители и т. д.).
- Адекватность выбора подхода: технологий, конструкций языка.
- Наличие в коде программы комментариев и их содержание.
- Невозможность внесения некорректных данных пользователем.
- Структура проекта.
- Наличие ошибок в программе (неожиданное поведение, не корректные выходные данные), в том числе возникающих при непредусмотренных действиях пользователей.
- Удобство использования (логичность элементов API и GUI-интерфейса).
- Наличие описания разработанного API с примерами.

## Размещение

- Код проекта должен быть размещён на GitHub или аналогичном сервисе;
- Сам проект должен быть развернут н Github Pages или аналогичном сервисе.

## Контакты

Telegram: @KonstantinShpilko — Константин Шпилько.
