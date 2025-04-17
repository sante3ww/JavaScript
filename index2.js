// Статус авторизации
let isLoggedIn = true;

// Роли
const ROLE_ADMIN = "admin";
const ROLE_MODERATOR = "moderator";
const ROLE_USER = "user";

// Устанавливаем роль и статус конкретного пользователя
const userStatus = isLoggedIn;
const userRole = ROLE_MODERATOR;

// Проверка доступа
if (userStatus) {
    if (userRole === ROLE_ADMIN) {
        console.log("Добро пожаловать, Админ!");
    } else if (userRole === ROLE_MODERATOR) {
        console.log("Добро пожаловать, Модератор!");
    } else if (userRole === ROLE_USER) {
        console.log("Добро пожаловать, Пользователь!");
    } else {
        console.log("Неизвестная роль.");
    }
} else {
    console.log("Вам нужно авторизироваться!!");
}
