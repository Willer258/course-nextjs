export async function getAllEvents(){
 const response = await  fetch('https://nextjscourse-b89c4-default-rtdb.firebaseio.com/events.json');
 const data = await response.json();


 const events = [];

  for (const key in data){
    events.push({
      id: key,
      ...data[key]
    });
  }

  return events;
}

// evenement exporte si le featured est true
export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);

}
//fonction d'evenements filtree 
export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

  //event exporte selon l'id
  export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
  }
