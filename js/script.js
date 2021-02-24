document.addEventListener('DOMContentLoaded', (event) => {
   /*
   Treehouse Techdegree:
   SJS Project 2 - Data Pagination and Filtering
   */



   /*
   For assistance:
      Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
      Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
   */



   /*
      Create the `showPage` function
      This function will create and insert/append the elements needed to display a "page" of nine students
   */
   let showPage = (list, page) => {

      let getHTML = i => {
         let html = `<li class="student-item cf">
                        <div class="student-details">
                           <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
                           <h3>${list[i].firstName} ${list[i].lastName}</h3>
                           <span class="email">${list[i].email}</span>
                        </div>
                        <div class="joined-details">
                           <span class="date">Joined ${list[i].registered.date}</span>
                        </div>
                     </li>`
         return html;
      }

      // name: {
      //    title: "Mr",
      //    first: "Duane",
      //    last: "Soto",
      //  },
      //  email: "duane.soto@example.com",
      //  registered: {
      //    date: "09-15-2002",
      //    age: 18,
      //  },
      //  picture: {
      //    large: "https://randomuser.me/api/portraits/men/53.jpg",
      //    medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
      //    thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg",
      //  },


      startIndex = 0;
      endIndex = 5;

      studentList = document.querySelector(".student-list")
      studentList.innerHTML = "";

      let htmlContents = [];

      for (i = 0; i < list.length; i++) {
         if (i >= startIndex && i <= endIndex) {
            htmlContents.push(getHTML(i));
         }
      }

      return htmlContents;
   }

   console.log( showPage(window.data) );


   /*
      Create the `addPagination` function
      This function will create and insert/append the elements needed for the pagination buttons
   */
   let addPagination = () => {


   }


   // Call functions


})




