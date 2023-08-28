import { Puff } from "react-loader-spinner";
import "./style.scss";

const SearchSpinner = () => {
    return (
        <div className='spinner'>
            <Puff
                height="80"
                width="80"
                radius={1}
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
}

export default SearchSpinner;
