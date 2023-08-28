import { LineWave } from "react-loader-spinner";
import "./style.scss";

const CarouselSpinner = () => {
    return (
        <div className='spinner'>
            <LineWave
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </div>
    );
}

export default CarouselSpinner;