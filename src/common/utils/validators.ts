export type ValidateFuncType = (value: string) => string;

export enum InputCharLimitsEnum {
    TITLE = 100,
    LOGIN = 30,
    USER_NAME = 30,
    PASSWORD = 24,
    EMAIL = 50
}

export const validators = {
    email: (value: string) => {
        if (!value) return "Поле обязательно для заполнения.";
        if (value.length > InputCharLimitsEnum.EMAIL) return "Email не должен превышать 50 символов.";
        if (/[а-яА-ЯёЁ]/.test(value)) return "Email не должен содержать буквы кириллицы.";
        if (!/^[a-zA-Z0-9@._-]+$/.test(value)) {
            return "Разрешены только латинские буквы, цифры и символы (., _, -)";
        }

        const at = value.indexOf("@");
        if (at === -1) return "Email должен содержать @.";

        const localPart = value.slice(0, at);
        const domainPart = value.slice(at + 1);

        if (!localPart) return "Введите название email до @.";
        if (!domainPart) return "Введите домен после @";
        if (!/^[^<>()[\]\\.,;:\s@"]+\.[^<>()[\]\\.,;:\s@"]{2,}$/.test(domainPart)) {
            return "Некорректный домен (пример: gmail.com).";
        }
        return '';
    },

    password: (value: string) => {
        if (!value) return 'Поле обязательно для заполнения';
        if (value.length < 8) return 'Пароль должен содержать минимум 8 символов';
        if (value.length > InputCharLimitsEnum.PASSWORD) return 'Пароль не должен превышать 24 символа';
        if (/[а-яА-ЯёЁ]/.test(value)) return 'Пароль не должен содержать буквы кириллицы';
        if (!/\d/.test(value)) return 'Пароль должен содержать хотя бы одну цифру';
        if (/[^A-Za-z\d@$!%*?&]/.test(value)) {
            return 'Пароль должен содержать только латинские буквы, цифры и специальные символы (@$!%*?&)';
        }
        if (!/[A-Z]/.test(value)) return 'Пароль должен содержать хотя бы одну заглавную букву';
        if (!/[a-z]/.test(value)) return 'Пароль должен содержать хотя бы одну строчную букву';
        return '';
    },

    user_name: (value: string) => {
        if (!value) return "Поле обязательно для заполнения";
        if (/[а-яА-ЯёЁ]/.test(value)) return "Имя пользователя не должно содержать буквы кириллицы";
        if (!/^[a-zA-Z0-9_.\s-]+$/.test(value)) return "Разрешены только латинские буквы, цифры, пробелы и символы (_ . -)";
        if (value.length > InputCharLimitsEnum.USER_NAME) return "Имя пользователя не должно превышать 30 символов";
        return '';
    },

    title: (value: string) => {
        if (!value || !value.trim()) return "Заголовок не может быть пустым";
        const trimmed = value.trim();
        if (/\d/.test(trimmed)) return "Заголовок не должен содержать цифры";
        if (!/^[a-zA-Zа-яА-ЯёЁ\s.,!?:;\-()«»"']+$/.test(trimmed)) {
            return "Можно использовать только буквы, пробелы и знаки препинания";
        }
        if (trimmed.length > InputCharLimitsEnum.TITLE) return "Заголовок не должен превышать 100 символов";
        return "";
    },

    code: (value: string) => {
        if (!value) return "Поле обязательно для заполнения";
        if (!/^\d{3}-\d{3}$/.test(value)) {
            return "Формат должен быть xxx-xxx, где x — цифра";
        }
        return '';
    },

    required: (value: string) => {
        if (!value || !value.trim()) return 'Поле обязательно для заполнения';
        return '';
    },
};
