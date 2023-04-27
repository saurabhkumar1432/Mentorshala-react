import React from 'react'
import {useState,useEffect} from 'react'
import http from '../../../http-common'
import CardPart from './CardPart'
const CardContainer = (props) => {
    const userData=props.userData
  const [dbData, setdbData] = useState(null);
    useEffect(() => {
        http
          .get(`/get/${userData.role}/details`)
          .then((res) => {
            const fetchedData = res.data;
            // console.log(res);
            const never_to_show = userData.dont_show_again;
            if (never_to_show != undefined) {
              // console.log(never_to_show);
              // console.log(fetchedData);
              const show_data = fetchedData.filter(
                (element) => !never_to_show.includes(element.username)
              );
              console.log(show_data);
              setdbData(show_data);
            } else {
              setdbData(fetchedData);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    if(!dbData){
        return <p>Loading....</p>
    }
  return (
    <CardPart dbData={dbData} userData={userData}></CardPart>
  )
}

export default CardContainer
