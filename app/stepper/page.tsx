
// export default function Stepper() {
//     return (
//       <section className="bg-gradient-to-b from-gray-100 to-white">

// <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
//   <div className="px-3 py-3 lg:px-5 lg:pl-3">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center justify-start rtl:justify-end">
//         <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
//             <span className="sr-only">Open sidebar</span>
//             <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
//             </svg>
//          </button>
//         <a href="https://flowbite.com" className="flex ms-2 md:me-24">
//           <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
//           <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
//         </a>
//       </div>
//       <div className="flex items-center">
//           <div className="flex items-center ms-3">
//             <div>
//               <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
//                 <span className="sr-only">Open user menu</span>

//               </button>
//             </div>
//             <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
//               <div className="px-4 py-3" role="none">
//                 <p className="text-sm text-gray-900 dark:text-white" role="none">
//                   Neil Sims
//                 </p>
//                 <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
//                   neil.sims@flowbite.com
//                 </p>
//               </div>
//               <ul className="py-1" role="none">
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
//                 </li>
//                 <li>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//     </div>
//   </div>
// </nav>

// <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-80 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
//    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
//    <ol className="space-y-4 w-72">
//     <li>
//         <div className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
//             <div className="flex items-center justify-between">
//                 <span className="sr-only">User info</span>
//                 <h3 className="font-medium">1. User info</h3>
//                 <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
//                 </svg>
//             </div>
//         </div>
//     </li>
//     <li>
//         <div className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400" role="alert">
//             <div className="flex items-center justify-between">
//                 <span className="sr-only">Account info</span>
//                 <h3 className="font-medium">2. Account info</h3>
//                 <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
//                 </svg>
//             </div>
//         </div>
//     </li>
//     <li>
//         <div className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400" role="alert">
//             <div className="flex items-center justify-between">
//                 <span className="sr-only">Social accounts</span>
//                 <h3 className="font-medium">3. Social accounts</h3>
//                 <svg className="rtl:rotate-180 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                 </svg>
//             </div>
//         </div>
//     </li>
//     <li>
//         <div className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
//             <div className="flex items-center justify-between">
//                 <span className="sr-only">Review</span>
//                 <h3 className="font-medium">4. Review</h3>
//             </div>
//         </div>
//     </li>
//         <li>
//         <div className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" role="alert">
//             <div className="flex items-center justify-between">
//                 <span className="sr-only">Confirmation</span>
//                 <h3 className="font-medium">5. Confirmation</h3>
//             </div>
//         </div>
//     </li>
// </ol>
//    </div>
// </aside>

// <div className="p-20 pt-20 sm:ml-64">
       
// <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Does your organization collect digital personal data from individuals?</h3>
// <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="vue-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
//         </div>
//     </li>
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="react-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="react-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
//         </div>
//     </li>
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="angular-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="angular-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maybe</label>
//         </div>
//     </li>
//     <li className="w-full dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="laravel-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="laravel-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sometimes</label>
//         </div>
//     </li>
// </ul>
 


// <h3 className="mb-4 pt-4 font-semibold text-gray-900 dark:text-white">Does your organization collect digital personal data from individuals?</h3>
// <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="vue-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
//         </div>
//     </li>
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="react-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="react-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
//         </div>
//     </li>
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="angular-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="angular-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maybe</label>
//         </div>
//     </li>
//     <li className="w-full dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="laravel-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="laravel-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sometimes</label>
//         </div>
//     </li>
// </ul>

// <h3 className="mb-4 pt-4 font-semibold text-gray-900 dark:text-white">Does your organization collect digital personal data from individuals?</h3>
// <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="vue-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
//         </div>
//     </li>
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="react-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="react-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
//         </div>
//     </li>
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="angular-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="angular-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maybe</label>
//         </div>
//     </li>
//     <li className="w-full dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="laravel-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="laravel-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sometimes</label>
//         </div>
//     </li>
// </ul>


// <h3 className="mb-4 pt-4 font-semibold text-gray-900 dark:text-white">Does your organization collect digital personal data from individuals?</h3>
// <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="vue-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
//         </div>
//     </li>
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="react-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="react-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
//         </div>
//     </li>
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="angular-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="angular-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maybe</label>
//         </div>
//     </li>
//     <li className="w-full dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="laravel-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="laravel-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sometimes</label>
//         </div>
//     </li>
// </ul>


// <h3 className="mb-4 pt-4 font-semibold text-gray-900 dark:text-white">Does your organization collect digital personal data from individuals?</h3>
// <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="vue-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
//         </div>
//     </li>
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="react-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="react-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
//         </div>
//     </li>
//     <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="angular-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="angular-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maybe</label>
//         </div>
//     </li>
//     <li className="w-full dark:border-gray-600">
//         <div className="flex items-center ps-3">
//             <input id="laravel-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
//             <label htmlFor="laravel-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sometimes</label>
//         </div>
//     </li>
// </ul>
// </div>


//       </section>
//     )
//   }


"use client"
import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
}

interface Step {
  questions: Question[];
}

const initialSteps: Step[] = [
    {
      questions: [
        {
          question: "Do you collect digital personal data or information from individuals, vendors, and employees or from any other mode or manner or source?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "How do you collect data or information: - by e-mail, electronic forms, data submitted on your website or app, activity tracking, cookies, or any other manner? Please clarify. (or all of the above modes).",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "If yes, for what specific purpose do you collect, use, or process the digital personal data or information?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Do you issue any prior Notice before making a request for collecting, use and processing of digital personal data?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Do you obtain ‘Consent’ before collecting, using, or processing digital personal data?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Have you appointed a Consent Manager?s",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
      ],
    },
    {
      questions: [
        {
          question: "Do you share the collected digital personal data or information with the third parties?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Do you obtain consent of the owner of the digital personal data or information before sharing it with the third parties?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Do you engage, appoint, or involve a third party for processing of collected digital personal data or information?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Have you established any mechanism to answer to the complaints from the owner of the data?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Have you published the contact information of a Data Protection Officer?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Have you published the contact information of a Grievance Officer?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Do you fall under the category of a Significant Data Fiduciary (‘SDF’)?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Being an SDF have you appointed a Data Protection Officer based in India?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
        {
          question: "Being an SDF have you appointed an independent data auditor?",
          options: ["Yes", "No", "Maybe", "Sometimes"],
        },
      ],
    },
    {
        questions: [
          {
            question: "Do you have a data protection policy within your organization?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you implement appropriate technical measures to ensure effective observance of security safeguards?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you maintain requisite security safeguards to protect digital personal data?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you maintain requisite security safeguards to prevent and avoid unauthorized access and personal data breach?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you have a system of logs such as ‘Access log’ that records who and when someone enters digital personal data database to processes, modify, erase, or accesses personal data?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you maintain proper network and security standards to detect suspicious activity related to protection of personal data in your control and possession?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
        ],
      },
      {
        questions: [
          {
            question: "Do you have a data retention policy?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Is your data retention policy complying with the provisions of DPDP Act?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you have a policy on data breach alerts or notification?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Does the Data Processor appointed by you have a policy on data breach alerts or notification?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you inform the effected owner of the personal data about an unauthorized access or personal data breach?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
        ],
      },
      {
        questions: [
          {
            question: "Do you ensure requisite security safeguards and compliance while sharing or transferring digital personal data with third parties outside India?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you take ‘Consent’ separately before sharing or transferring digital personal data with third parties outside India? If yes, please explain.",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you allow owner of digital personal data / information to exercise his or her rights to access, correct, or delete the digital personal data?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you provide training and awareness programs regarding data protection and compliance?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
          {
            question: "Do you regularly conduct such training and awareness programs regarding data protection and compliance?",
            options: ["Yes", "No", "Maybe", "Sometimes"],
          },
        ],
      },
  ];
  

export default function Stepper() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<Array<number | undefined>[]>(Array(initialSteps.length).fill([]));
  
    const handleCheckboxChange = (questionIndex: number, optionIndex: number) => {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[currentStep] = newSelectedOptions[currentStep] || [];
      newSelectedOptions[currentStep][questionIndex] = optionIndex;
      setSelectedOptions(newSelectedOptions);
    };
  const renderOptions = () => {
    const currentQuestions = initialSteps[currentStep].questions;

    return currentQuestions.map((question, questionIndex) => (
      <div key={questionIndex} className="mb-4">
        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{question.question}</h3>
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {question.options.map((option, optionIndex) => (
            <li key={optionIndex} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  id={`checkbox-list-${optionIndex}`}
                  type="checkbox"
                  value={option}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked={selectedOptions[currentStep]?.[questionIndex] === optionIndex}
                  onChange={() => handleCheckboxChange(questionIndex, optionIndex)}
                />
                <label htmlFor={`checkbox-list-${optionIndex}`} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {option}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  const isStepComplete = () => {
    const currentQuestions = initialSteps[currentStep].questions;

    for (let i = 0; i < currentQuestions.length; i++) {
      if (!selectedOptions[currentStep]?.[i]) {
        return false;
      }
    }

    return true;
  };

  const handleNextStep = () => {
    if (isStepComplete()) {
      setCurrentStep(currentStep + 1);
    } else {
      alert('Please answer all questions before moving to the next step.');
    }
  };
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="flex">
        {/* Left Sidebar */}
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-80 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ol className="space-y-4 w-72">
              <h1>Lorem Ipsum Title</h1>
              {initialSteps.map((_, index) => (
                
                <li key={index} onClick={() => setCurrentStep(index)} className="cursor-pointer">
                  <div className={`w-full p-4 text-gray-900 border border-gray-300 rounded-lg ${index === currentStep ? 'bg-gray-200' : ''} dark:border-gray-800 dark:text-gray-400`} role="alert">
                    <div className="flex items-center justify-between">
                      <span className="sr-only">{`Step ${index + 1}`}</span>
                      <h3 className="font-medium">{`Step ${index + 1}`}</h3>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Right Content */}
        <div className="p-20 pt-20 sm:ml-64">
          {renderOptions()}

          {/* Add logic for navigating to the next step */}
          {currentStep < initialSteps.length - 1 && (
            <button onClick={handleNextStep}>Next</button>
          )}
        </div>
      </div>
    </section>
  );
}
