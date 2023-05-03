import { createSlice } from '@reduxjs/toolkit'          
import Ceza from './components/Images/Ceza.jpg'
import Müslüm from './components/Images/Müslüm.jpg'
import Tarkan from './components/Images/Tarkan.jpg'
import İsmail from './components/Images/İsmail.jpg'
import Melike from './components/Images/Melike.jpg'
import Ahmet from './components/Images/Ahmet.jpg'
import İbrahim from './components/Images/İbrahim.jpg'
import Namık from './components/Images/Namık.jpg'
import Güllü from './components/Images/Güllü.jpg'
import Gökhan from './components/Images/Gökhan.jpg'
import Sertap from './components/Images/Sertap.jpg'
import Rock from './components/Images/Rock.jpg'
import Slow from './components/Images/Slow.jpg'
import Pop from './components/Images/Pop.png'
import Caz from './components/Images/Caz.jpg'


const initialState = { 
    musicData: [
            {
            id:1,
            "name":"Neyim var ki?",
            "genre":"Rap",
            img:Ceza,
            "singer":"Ceza,Sagopa",
            "album":"B Albümü",
            "date":"20.01.2004",
            "duration":3.50   
            },
            {
             "id":2,
             "name":"Hangimiz Sevmedik",
             "genre":"Arabesk",
             img:Müslüm,
             "singer":"Müslüm Gürses",
             "album":"B Albümü",
             "date":"12.03.2001",
             "duration":4.20   
            },
            {
             "id":3,
             "name":"Kuzu Kuzu",
             "genre":"Pop",
             img:Tarkan,
             "singer":"Tarkan",
             "album":"C Albümü",
             "date":"20.09.2003",
             "duration":3.59   
            },
            {
             "id":4,
             "name":"Bomba Bomba",
             "genre":"Pop",
             img:İsmail,
             "singer":"İsmail YK",
             "album":"A Albümü",
             "date":"12.03.2009",
             "duration":4.10
            },
            {
             "id":5,
             "name":"Dön Ne Olur",
             "genre":"Slow",
             img:Melike,
             "singer":"Melike Şahin",
             "album":"D Albümü",
             "date":"11.02.2022",
             "duration":4.20   
               },
            {
             "id":6,
             "name":"Neden Bileceksiniz",
             "genre":"Arabesk",
             img:Ahmet,
             "singer":"Ahmet Kaya",
             "album":"B Albümü",
             "date":"22.08.2001",
             "duration":4.39
            },
               {
             "id":7,
             "name":"Nankör Kedi",
             "genre":"Arabesk",
             img:İbrahim,
             "singer":"İbrahim Tatlıses",
             "album":"C Albümü",
             "date":"22.09.2006",
             "duration":3.24   
            },
            {
             "id":8,
             "name":"Arabada Beş Evde On Beş",
             "genre":"Oyun Havası",
             img:Namık,
             "singer":"Ankaralı Namık",
             "album":"A Albümü",
             "date":"09.09.2009",
             "duration":4.20   
            },
            {
             "id":9,
             "name":"Öğrettin Bana",
             "genre":"Arabesk",
             img:Güllü,
             "singer":"Güllü",
             "album":"C Albümü",
             "date":"23.05.2005",
             "duration":4.00   
            },
            {
             "id":10,
             "name":"Çatı Katı",
             "genre":"Slow",
             img:Gökhan,
             "singer":"Gökhan Türkmen",
             "album":"A Albümü",
             "date":"12.03.2001",
             "duration":4.20   
            },
            {
             "id":11,
             "name":"Aşk",
             "genre":"Rock",
             img:Sertap,
             "singer":"Sertap Erener",
             "album":"D Albümü",
             "date":"29.01.2003",
             "duration":4.20   
            }
        ],
        albums:[
          {
            id:1,
            name:"Rock",
            img:Rock
            
          },
          {
            id:2,
            name:"Pop",
            img:Pop
          },
          {
            id:3,
            name:"Slow",
            img:Slow
          },
          {
            id:4,
            name:"Caz",
            img:Caz
          },     {
            id:5,
            name:"Rock",
            img:Rock
            
          },
          {
            id:6,
            name:"Pop",
            img:Pop
          },
          {
            id:7,
            name:"Slow",
            img:Slow
          },
          {
            id:8,
            name:"Caz",
            img:Caz
          },
          {
            id:9,
            name:"Pop",
            img:Pop
          },
          {
            id:10,
            name:"Slow",
            img:Slow
          },
          {
            id:11,
            name:"Caz",
            img:Caz
          }
        ],
       addList:[]
}
  

  export const dataSlice =  createSlice({ 
    name: 'data',  
    initialState,
    reducers: {
      filterTitle :(state , action) =>{ 
        const filterData = state.albums?.filter((el) => el?.name?.toLowerCase()?.includes(action.payload.toLowerCase()));
        state.albums =  filterData   
      },
    
      buttonFocus : (state , action) => {
        state.addList = [...state.addList, action.payload]     
     },
     deleteFilter : (state , action) => {
      const musicDataFilter = state.addList?.filter((el) => el.id !== action.payload)
      state.addList = musicDataFilter
  }

    }
  })

  export const { filterTitle, buttonFocus ,deleteFilter } = dataSlice.actions

  export default dataSlice.reducer  