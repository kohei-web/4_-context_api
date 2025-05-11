/**
 * TodoPage
 *
 * @package pages
 *
 */

import { TodoTemplate } from "../templates/TodoTemplate";
import { TodoProvider } from "../contexts/TodoContext.jsx";

/**
 * TodoPage
 * @returns {JSX.Element}
 * @constructor
 *
 */

export const TodoPage = () => {
    return (
        <div>
            <h1>Todo Page</h1>
            <TodoProvider>
                <TodoTemplate />
            </TodoProvider>
        </div>
    )
};
