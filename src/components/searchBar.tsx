import '../assets/style/styleSearchBar.css'
import image from '../assets/feuilleAutomne.png'

interface Props {
    inValue:string
    method: (values: string) => void;
}

const SearchBar:React.FC<Props> = ({inValue,method}) => {

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const validCharacters = /^[a-zA-Z0-9\sàéèêëîïôùüç]*$/;
        if (validCharacters.test(event.target.value)) {
          method(event.target.value);
        }
    };

    return (
        <div className="search-bar-container">
            <input
                className="search-bar"
                type="text"
                placeholder="Rechercher un cake au chocolat..."
                value={inValue}
                onChange={handleSearchChange}
            />
            <img src={image} alt="Autumn Leaf" />
        </div>
    )
}

export default SearchBar