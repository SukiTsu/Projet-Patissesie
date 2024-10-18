
interface Props {
    data: { label: string; value: string }[]; // tableau d'objets avec `label` et `value`
    method: (value: string) => void; // fonction qui prend une chaîne de caractères en paramètre
    value: string; // la valeur sélectionnée
}

/**
 * Select qui appel une fonction avec comme paramètre la valeurs sélectionné
 * @param value: valeur attribué par défault
 * @param data: données à lister dans le select
 * @param method: fonction à appeler lors que l'utilisateur choisi une valeur
 * @returns Composant JSX Select
 */
const SelectPerso: React.FC<Props> = ({ value, data, method }) => {
    return (
        <select
            required={true}
            multiple={false}
            className="input-field"
            value={value}
            onChange={(e) => method(e.target.value)}
        >
            {data.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectPerso