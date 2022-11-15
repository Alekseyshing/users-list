# Приложение users-list

Данный проект разработан по задачам команды волонтеров Antipoff Group по уходу за питомцами.

React приложение, которое умеет показывать следующие страницы:

1. /registration - страница регистрации с необходимой валидацией полей
2. /login - страница ввода логина и пароля с необходимой валидацией полей
3. /users - страница с users, с отображением данных с удаленного сервера [reqres](https://reqres.in/)
4. /users/id - страница отдельного user

На сайте в хедере реализовать ссылки:

1. Сегодня (/today)
2. Животные (/animals)

Если пользователь кликает на страницы Сегодня и Животные, и он не “авторизован/токен закончился” - перекидывать на страницу /login

## Авторизация
Адрес backend: "https://acits-test-back.herokuapp.com/api/". 

Форма входа (/login) принимает данные, введённые пользователем и отправляет на апи post запросом. Поинт запроса: "login". 

Для авторизации в теле запроса должны быть такие данные:

login: 'test_user', password: '123456'

Если введены другие данные, то с апи придёт ошибка, тогда нужно вывести сообщение:
Имя пользователя или пароль введены не верно
Если введены корректные данные, то из полученного с апи объекта достать токен (хранится под ключом "accessToken") и сохранить его в localStorage, затем перебрасывать на страницу /today. 
После обновления страницы авторизация сбрасываться не должна. Время жизни токена - 10 минут.

В дальнейшем для всех остальных запросов на сервер использовать токен из localStorage. Отправляться он должен заголовком: Authorization: 'Bearer ' + token.

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
- [React-icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com/)
- [React UI Tools](https://mui.com/)

## Использование

Откройте проект на своем компьютере

### Установка зависимостей
Для установки зависимостей, выполните команду: 
```sh
npm i
```
### Запуск Development сервера
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm start
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
