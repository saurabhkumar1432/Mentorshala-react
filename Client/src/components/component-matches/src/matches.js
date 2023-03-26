import './matches.css'
import chatData from '../../component-chat/data/chatData'
// import Contact from '../../component-contact/Contact'
import MatchItem from './matchItem'
const Matches=()=>{
    const userDetail=
    {
      "firstName": "Abhishek",
      "lastName": "Singh",
      "profilePic": "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg",
      "banner": "https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "from": "Delhi",
      "country": "India",
      "college": "IIIT Sri City",
      "specialization": "Web Development",
      "description": "Love to travel. Professional Vlogger. Been Places",
      "experience": [
        "Worked as front-end developer",
        "Working in IBM design department."
      ],
      "Linkedin": "https://www.linkedin.com/in/abhay-pratap-singh-878457203/",
      "Email": "abhishek.k20@iiits.in",
      "Password": "1234",
      "report": {
        "$numberLong": "0"
      },
      "role": "Mentee",
      "username": "abhishek_singh581",
      "profile_match_list": [
        {
          "firstName": "Abhay",
          "lastName": "Pratap",
          "role": "Mentor",
          "profilePic": "https://i.pinimg.com/originals/36/fa/7b/36fa7b46c58c94ab0e5251ccd768d669.jpg",
          "banner": "https://images.unsplash.com/photo-1502230831726-fe5549140034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          "from": "Delhi",
          "country": "India",
          "college": "IIIT Delhi",
          "specialization": "Web Development",
          "description": "Avid book reader, always ready to learn new things.",
          "experience": [
            "Worked as front-end developer",
            "Working in IBM design department."
          ],
          "Linkedin": "https://www.linkedin.com/in/abhay-pratap-singh-878457203/",
          "Email": "abhaypratap.s20@iiits.in",
          "Password": "123",
          "report": {
            "$numberLong": "0"
          },
          "username": "abhay258"
        },
        
      ]
    }
    let matchList;
    if(userDetail.profile_match_list!=undefined){
        matchList=userDetail.profile_match_list
    }
    else{
        matchList=[]
    }
    return(
        <div id="matchesContainer">
            {
                matchList.map(
                    contact => {
                        // console.log(contact.Name);
                        return <MatchItem contact={contact}/>
                    }
                ) 
            }
        </div>
    )
}
export default Matches