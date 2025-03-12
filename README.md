
### ДЗ - 2

1. поставить node.js - https://nodejs.org/en
2. поставить расширение prettier https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode и форматировать свой код. В vs code можно настроить прогон на сохранения файла
3. создать ветку для ДЗ - hw-2
4. создать проект с помощью vite - https://vitejs.dev/guide/#scaffolding-your-first-vite-project (можете использовать любой пакетный менеджер)
5. почистить проект и установить зависимости
6. скопировать к себе моковые данные из этого проекта (materials/mock.js)
7. Отобразить все рестораны из моковых данных (импортируем константу в main.jsx и используем данные). Отображаем рестораны друг за другом.
   1. Название ресторана
   2. Заголовок - Меню (h3)
   3. Список названий блюд (используем тег ul и li)
   4. Заголовок - Отзывы (h3)
   5. Список текстов отзывов (используем тег ul и li)
8. сделать коммит и запушить
9. открыть ПР из ветки с ДЗ в основную ветку
10. отправить ссылку на ПР в ветку ДЗ-2

### ДЗ - 3

- установить расширение eslint - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint и поправить конфиг в соответствии с лекционным проектом
- установить react расширение для браузера - https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
- разбить приложение на компоненты
- необходимо в блюдо добавить счетчик. Минимальное значение 0, максимальное 5, по умолчанию 0. Кнопки +-
- добавить условный рендеринг, где могут отсутствовать данные
- реализовать компонент лейаута с хедером, футером и обернуть приложение

Реализовать табы - кнопки с названием ресторана, по одной на каждый ресторан

- Кнопки отображаем между хедером и рестораном
- Единовременно отображаем только 1 ресторан
- По умолчанию - отображаем первый
- По клику на кнопку отображаем соответствующий ей ресторан. При повторном клике на активную кнопку ничего не происходит.