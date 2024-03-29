

const MedicineCard = () => {
  return (
    <div className="flex flex-col w-[50%] items-center mx-auto">
        <div className="flex w-full object-cover items-center">
            <img className="mx-auto" src="https://www.practostatic.com/practopedia-images/v3/res-150/nan-pro-2-refill-400gm_72569719-34de-4353-97a6-dde56823cf0f.JPG"></img>
        </div>
        <hr></hr>
        <div className="flex flex-col items-start gap-4">
            <span className="text-gray-600 text-xl font-semibold">NAN PRO 2 REFILL 200gm</span>
            <span className="text-gray-700 text-xl font-bold">₹ 805.00/-</span>
        </div>
    </div>
  )
}

export default MedicineCard;