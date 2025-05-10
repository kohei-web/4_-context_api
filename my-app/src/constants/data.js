
/**
 * TodoListの初期データ
 * @type {Array}
 * @property {number} id - TodoのID
 * @property {string} title - Todoのタイトル
 */
// 初期表示用のTodoList
export const initialTodoList = [
    {
        id: 1,
        title: "Reactの勉強",
    },
    {
        id: 2,
        title: "Vueの勉強",
    },
    {
        id: 3,
        title: "Angularの勉強",
    },
];


/**
 * TodoListのid初期データ
 * @type {Array}
 * @package components
 */
// id管理用
export const todoLength = initialTodoList.length;
