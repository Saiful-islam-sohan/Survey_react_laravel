import PageComponent from "../components/PageComponent";
import SurveysList from "../components/SurveysList";
import { useStateContext } from "../context/ContextProvider";

const Survayes = () => {
  const{surveys}= useStateContext()
//   console.log(surveys);
    return (
        <>
            <PageComponent title="survey">
              <div className="grid grid-rows-4 gap-5">

             
              {
                surveys.map((survey)=>{
                   return <SurveysList survey={survey} key={survey.id}></SurveysList>

                })
              }
               </div>
            </PageComponent>
        </>
    );
};

export default Survayes;