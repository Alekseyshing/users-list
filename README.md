# Приложение users-list

Данный проект разработан по задачам команды волонтеров Antipoff Group по уходу за питомцами.

React приложение, которое умеет показывать следующие страницы:

1. /registration - страница регистрации с необходимой валидацией полей
2. /login - страница ввода логина и пароля с необходимой валидацией полей
3. /users - страница с users, с отображением данных с удаленного сервера [reqres](https://reqres.in/)
4. /users/id - страница отдельного user

## Регистрация и логин
Адрес backend: [reqres](https://reqres.in/). 

Форма входа (/login) принимает данные, введённые пользователем и отправляет на апи post запросом. Поинт запроса: "login". 

Для авторизации в теле запроса должны быть такие данные:

{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}

В Response получаем token:
{
    "token": "QpwL5tke4Pnpja7X4"
}

и сохраняется в localStorage.


## Содержание

- [Технологии](#технологии)
- [Начало работы](#начало-работы)
- [Использование](#Использование)
- [Установка зависимостей](#Установка-зависимостей)
- [Запуск Development сервера](#Запуск-Development-сервера)
- [Создание билда](#Создание-билда)
- [Требования](#Требования)
- [To Do](#To-Do)
- [Команда проекта](#команда-проекта)

## Технологии

- [Tailwindcss](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Redux-Toolkit](https://redux-toolkit.js.org/)
- [React-router-dom](https://reactrouter.com/en/main)
- [Vite](https://vitejs.dev/guide/env-and-mode.html)

## Использование

Откройте проект на своем компьютере

### Установка зависимостей
Для установки зависимостей, выполните команду: 
```sh
npm i
```
### Запуск Development сервера
Чтобы запустить приложение для разработки, выполните команду:
```sh
npm run dev
```
### Создание билда
Чтобы выполнить production сборку, выполните команду: 
```sh
npm run build
```

### Требования
Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org/) v8+.


## To do
- [x] Добавить README
- [ ] ...

## Команда проекта
Оставьте пользователям контакты и инструкции, как связаться с командой разработки.

- [Alexey Shingarev](https://t.me/alekseyshing) — Front-End Engineer