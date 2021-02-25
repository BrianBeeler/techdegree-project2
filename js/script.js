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

   // Global constant - amount it items to be shown at a time;
   const itemsPerPage = 9;   
   let filteredData = window.data;
   /*
      Create the `showPage` function
      This function will create and insert/append the elements needed to display a "page" of nine students
   */
   let showPage = (list, page) => {

      /**
       * getHTML function returns the template for each piece of data
       * @param {*} i - the index of the list, for the template being generated
       */

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

      // Next two lines get starting and ending index of data to show
      // based on the page being shown   
      startIndex = ( (page-1) * itemsPerPage);
      endIndex = startIndex + itemsPerPage - 1;

      // Get student list and clear its contents
      studentList = document.querySelector(".student-list")
      studentList.innerHTML = '';

      // Iterate through data and append html for each falling within
      // the appropriate range of indexes.
      let htmlContents = '';
      for (i = 0; i < list.length; i++) {
         if (i >= startIndex && i <= endIndex) {
            htmlContents += getHTML(i);
         }
    
      }

      // No results found
      if (!htmlContents) {
         htmlContents = `<p>No Results Found</p>`;
      }

      // Put the html template in the studentsList element
      studentList.insertAdjacentHTML('beforeend',htmlContents);
      
      // Whenever the main display page is created, recreate the buttons
      
      // Note: it might be ineficient to ask the dom to recreate the pages section
      // every time the main display updates. Consider revising page shows
      // any flickering or slowness

      addPagination(list, page);
   }


   /*
      Create the `addPagination` function
      This function will create and insert/append the elements needed for the pagination buttons
   */
   let addPagination = (list, activePage) => {

      // Add page buttons based on the number of items in the list
      let numButtons = Math.ceil( list.length / itemsPerPage );
      let linkList = document.querySelector("ul.link-list");
      linkList.innerHTML = "";
      for ( i = 1 ; i <= numButtons; i++ ) {
         linkList.innerHTML += `
            <li>
               <button type="button">${i}</button>
            </li>
         `
      }

      // For whatever page is active, set that button to have the class "active"
      linkList.querySelector(`li:nth-child(${activePage}) > button`)
         .classList.add("active");
      
      // Add an event listener to each of the buttons
      let buttons = linkList.querySelectorAll("li button");
      for (i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener("click", (e) => {
            pageNumber = +e.target.textContent;   
            showPage(filteredData, pageNumber);     
         });
      }


   }

   let addSearchBar = () => {

      let header = document.querySelector(".header");

      header.innerHTML += 
      `
         <label for="search" class="student-search">
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
         </label>
      `;

      header.querySelector("#search").addEventListener(["keyup"], (e) => {
         console.log("triggered")
         searchTerm = e.target.value.toLowerCase();
         console.log("Search term:", searchTerm);
         filteredData = window.data.filter((curr, index, array) => {
            let name = curr.name.first + curr.name.last;
            name = name.toLowerCase();
            return name.includes(searchTerm);
         });
         showPage(filteredData,1);
      });

 

      // get header element
      // append search component
      // add change event to search input
      // function when change is triggered
         // filter window.data, save to variable
         // run showPage with filtered data
   }


   // Call functions
   showPage(filteredData, 1);
   // Note: addPagination moved to within "showPage"
   // function in order for updates to happen automatically
   // See line 66 for a note about efficiency.
   addSearchBar();
})




// TO-DO: There is a bug where changing pages does invalidates filtering