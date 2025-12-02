import {maintainanceProcess} from '../mobile-app-support/data'
import AppCard from './appCard';

const MaintenanceProcess = ({data=maintainanceProcess}) => {
  return (
    <>
      <div className="row mt-5">
        {data.map((item, index) => (
           <div className="col-md-6 my-2" key={index}>
         
           <AppCard heading={item.heading} height={231} hoverEffect='effect3' description={item.description} />
         </div>
        ))}
       
      </div>
    </>
  );
};

export default MaintenanceProcess;
