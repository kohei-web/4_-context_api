/**
 * TodoPage
 *
 * @package pages
 *
 */

import { TodoTemplate } from "../templates/TodoTemplate";

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
            <TodoTemplate />
        </div>
    )
};
