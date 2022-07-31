import { data } from 'autoprefixer'
import React from 'react'
import Stats from '../components/Stats'
import Register from '../components/Register'
// Change here
const userStats = [
    {
        count: 28,
        heading: "% of merged PR"
    },
    {
      count: 2,
      heading: "Total Stars"
  },
    {
        count: 4,
        heading: "Total forks"
    },
    {
        count: 0,
        heading: "No. of Orgs"
    },
    {
        count: 5,
        heading: "Commit Freq/month"
    }
]
export default function UserDashboard() {
  const [show, setShow] = React.useState(true);
  if(show){
    return(
      <Register lift={setShow} kind={"user"}/>
    )
  }
  return (
    <div>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6">
        <h1 class="title-font font-medium text-xl mb-2 text-gray-900">There is <span className="text-orange-400"> 82% </span>chance that that user is <span className="text-red-400"> Malicious </span> </h1>
        <div class="leading-relaxed">After analysing the parameters of GitHub profile of the user and correlating with the critical values, our <b> Machine Learning models </b> predits that the following user is <b> malicious </b> 
      and can possibly cause threat. The following graph depicts a clustering model segregating the malicious commits from the non-malicious ones.
      </div>
      </div>
      {
        userStats?.map((item, idx) => <Stats key={idx} count={item.count} heading={item.heading}/> )
      }
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src="/graph.jpeg" alt="stats" />
    </div>
  </div>
</section>



    </div>
  )
}
