import styles from './styles/search.module.css';

const Search = ({onChange, users}) => {

    return(
        <div className={styles.container}>
            <input 
                className={styles.search}
                type="text"
                placeholder="Я ищу..."
                name="search"
                onChange={onChange}
            />
        </div>
    )
}

export default Search;