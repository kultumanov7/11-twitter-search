import "./styles.css";

const SearchSide = ({filterSearch}) => {
    
    return (
        <div className="h-auto w-25 h-fit-content d-flex justify-content-center mt-3 p-4">
            <div className="w-100 input-div d-flex justify-content-center align-items-center">
                <img width="25" height="25" src={require('./images/lupa.png')}/>
                <input className="input-enter" onChange={filterSearch} placeholder="Search Twitter"/>
            </div>
        </div>
    )
}

export default SearchSide;