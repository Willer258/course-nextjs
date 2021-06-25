import { Fragment } from 'react';
//import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import Button from '../../components/ui/button';

function FilteredEventsPage(props) {
//  const router = useRouter();

 /*  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
 */
  const filteredEvents = props.events;
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
      
          <p>No events found for the chosen filter!</p>
        
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

const date = new Date (numYear,numMonth -1 )
  return (
    <Fragment>
      <p> evenement de {date}</p>
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context){
  const {params} = context;



  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props:{hasError: true}
     // notFound : true,
      /* 
      redirect:{
        destination:'/error'
      } */
    };
  }
  return {
    props: {
      event : filteredEvents,
      date: {
        year: numYear,
        month:numMonth,
      }
    }
  }
}
export default FilteredEventsPage;