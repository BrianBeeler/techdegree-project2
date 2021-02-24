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
                           <h3>${list[i].name.first} ${list[i].name.last}</h3>
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


      startIndex = ( (page-1) * 9);
      endIndex = startIndex + 8

      studentList = document.querySelector(".student-list")
      studentList.innerHTML = "";

      let htmlContents = '';

      for (i = 0; i < list.length; i++) {
         if (i >= startIndex && i <= endIndex) {
            htmlContents += getHTML(i);
         }
      }

      studentList.insertAdjacentHTML('beforeend',htmlContents);
      addPagination(list, page);
   }


   /*
      Create the `addPagination` function
      This function will create and insert/append the elements needed for the pagination buttons
   */
   let addPagination = (list, activePage) => {

      let numButtons = Math.ceil( list.length / 9 );
      let linkList = document.querySelector("ul.link-list");
      linkList.innerHTML = "";
      for ( i = 1 ; i <= numButtons; i++ ) {
         linkList.innerHTML += `
            <li>
               <button type="button">${i}</button>
            </li>
         `
      }

      // Select the first li element, add the class active to it.
      linkList.querySelector(`li:nth-child(${activePage}) > button`)
         .classList.add("active");
      
      // Add an event listener to all of the buttons
      let buttons = linkList.querySelectorAll("li button");
      for (i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener("click", (e) => {
            console.log("Button: ", e.target.textContent);
            pageNumber = +e.target.textContent;   
            showPage(window.data, pageNumber);     
         });
      }


   }

   let AddSearchBar = () => {
      // get header element
      // append search component
      // add change event to search input
      // function when change is triggered
         // filter window.data, save to variable
         // run showPage with filtered data
   }


   // Call functions
   showPage(window.data, 1);
   //addPagination(window.data, 1);

})




