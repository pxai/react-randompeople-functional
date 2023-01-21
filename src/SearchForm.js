function SearchForm (props) {
    const {handleGender, handleCountry, country} = props;
    return (
        <div className="SearchForm">
            <div className="SearchForm-field">
                <select onChange={handleGender}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="">Both</option>
                </select>
            </div>
        <div className="SearchForm-field">
            <input type="text" placeholder="Select country code: us, it, fr,"  
            onChange={handleCountry} value={country} />
        </div>
        </div>
    );
}

export default SearchForm;