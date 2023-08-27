import { Oval } from "react-loader-spinner";
import "./style.scss";

const Spinner = () => {
  return (
      <div className='spinner'>
          <Oval
              height={50}
              width={50}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
          />
      </div>
  );
}

export default Spinner;
