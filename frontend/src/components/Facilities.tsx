import FacilityCard from "./FacilityCard";

const Facilities = () => {
  return (
    <div className="flex gap-4 py-10 justify-between items-center">
        <FacilityCard url="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png"
            facility="Instant Video Consultation"
            feature="Connect within 60 sec" 
            bgColor="bg-blue-400"/>

        <FacilityCard url="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png"
            facility="Find Doctors Near You"
            feature="Confirmed Appointments"
            bgColor="bg-green-300" />

        <FacilityCard url="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png"
            facility="Medicines"
            feature="Essentials at your doorstep"
            bgColor="bg-gray-300" />

        <FacilityCard url="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png"
            facility="Lab Tests"
            feature="Sample pickup at your home"
            bgColor="bg-blue-200" />

        <FacilityCard url="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png"
            facility="Surgeries"
            feature="Safe and trusted surgery centers"
            bgColor="bg-purple-300" />
    </div>
  )
}

export default Facilities;