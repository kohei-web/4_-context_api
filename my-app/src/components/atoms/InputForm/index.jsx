import styles from './InputForm.module.css';

/**
 *
 * @returns {JSX.Element}
 * @package components
 * @subpackage atoms
 * @module InputForm
 * @description InputFormコンポーネント
 *
 */

export const InputForm = (props) => {
    const { inputValue, onChangeText, placeholder, handleKeyUp } = props;

    return (
        <input
            className={styles.inputField}
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onChange={onChangeText}
            // handleKeyUp引数が渡されなかったらundefined
            onKeyUp={handleKeyUp ?? (() => {})}
        />
    )
}
