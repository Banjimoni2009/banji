import Fetch from "./Fetch"

function ListsAndKeys() {
    let numbers = [1,2,3,4,5,6,7,8,9,10]

    // let cohorts = [
    //     {name: 'Banji', complexion: 'Fair', photo: 'https://img.magnific.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740&q=80', phone: '09012345678'},
    //     {name: 'Treasy', complexion: 'Dark', photo: 'https://media.istockphoto.com/id/2060009001/vector/avatar-user-profile-person-icon-profile-picture-for-social-media-profiles-icons-screensavers.jpg?s=612x612&w=0&k=20&c=onk7rmEoISSvHVlqc-SiBvcUr8ilCm2u9kcw3_Bm_SA=', phone: '09012345678'},
    //     {name: 'OO1', complexion: 'Medium', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzX8-4gK7UeIeJoUiEXYiIabV2z0GeSztYEUU2DR2MKg&s', phone: '09012345678'},
    //     {name: 'OO2', complexion: 'Light', photo: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png',phone: '09012345678'},
    // ]
  return (
    <div>
        <p>ListsAndKeys (Map)</p>
         
         <ul>
            {numbers.map((number,i) => (
                <li className="bg-amber-300" key={i}>{number}</li>
                
            ))}
         </ul>
       {/* <div className="flex flex-col gap-2">
         {numbers.map((number) => (
            <p className="bg-amber-300">{number}</p>
        ))}
       </div>
       <div className="flex flex-row gap-2">
        {cohorts.map((cohort) => (
            <div className=" gap-2 items-center">
                <img src={cohort.photo} alt="" className="w-10 h-10 rounded-full" />
                <p>{cohort.name}</p>
                <p>{cohort.complexion}</p>
                <p>{cohort.phone}</p>
            </div>
        ))}
       </div>
       
        */}
        <Fetch/>
    </div>
  )
}

export default ListsAndKeys