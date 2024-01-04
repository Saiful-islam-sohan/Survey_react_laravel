

const SurveysList = (props) => {
    console.log(props)
    const{expire_date,image_url}=props.survey;
    
    return (
        <div className="flex-col px-6 py-5 bg-white shadow-md">
            <img src={image_url} className="w-[55px] h=[55px]" />
        <p>{expire_date}</p>
           
        </div>
    );
};

export default SurveysList;