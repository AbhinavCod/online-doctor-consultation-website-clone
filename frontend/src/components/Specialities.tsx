import SpecialityCard from "./SpecialityCard"


const Specialities = () => {
  return (
   <div className="flex gap-6">
    <SpecialityCard url="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png"
     symptom="Periods doubt or Pregnancy" />

    <SpecialityCard url="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png"
     symptom="Acne, pimples or skin issues" />

    <SpecialityCard url="https://www.practo.com/consult/static/images/top-speciality-sexology.svg"
     symptom="Performance Issues in bed" />

    <SpecialityCard url="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"
     symptom="Cold, Cough, and fever" />

    <SpecialityCard url="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg"
     symptom="Child not feeling well" />

    <SpecialityCard url="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png"
     symptom="Depression or anxiety" />

   </div>
  )
}

export default Specialities