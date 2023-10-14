import { Puff } from "react-loader-spinner";
import "./style.scss";

const SearchSpinner = () => {
    return (
        <div className='spinner'>
            <Puff
                height="60"
                width="60"
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
