import Header from './Header';
import FilterOption from './Filter';
import CareProduct from './CareProduct';
// import { useNavigate } from 'react-router-dom';

const PlantCareHome = () => {
  // const navigate = useNavigate();

 

  return (
    <div className="mx-auto max-w-7xl px-4">
     
      <div className="mb-8">
    <Header/>
      </div>

   
      <div className="mb-8">
        <FilterOption />
      </div>

      <div className="mb-8">
        <CareProduct />
      </div>
    </div>
  );
}

export default PlantCareHome;
