import isEmpty from 'lodash/isEmpty';

/** Waste Type Colors */
const typeColors = {
  recycling: 'blue',
  garbage: 'black',
  hazardous: 'red',
  food: 'orange',
  yard: 'brown',
  christmas: 'green'
};

/** Agenda Items with Types */
export const agendaItems = [
  {
    title: '2025-01-07',
    data: [
      { hour: '9:00 AM', title: 'Recycling Pickup', type: 'recycling' },
      { hour: '11:00 AM', title: 'Garbage Pickup', type: 'garbage' }
    ]
  },
  {
    title: '2025-01-08',
    data: [
      { hour: '2:00 PM', title: 'Hazardous Waste Drop-off', type: 'hazardous' },
      { hour: '3:00 PM', title: 'Food Waste Collection', type: 'food' }
    ]
  },
  {
    title: '2025-01-09',
    data: [
      { hour: '10:00 AM', title: 'Yard Waste Collection', type: 'yard' }
    ]
  },
  {
    title: '2025-01-10',
    data: [
      { hour: '10:00 AM', title: 'Christmas Tree Collection', type: 'christmas' }
    ]
  },
  {
    title: '2025-01-15',
    data: [{}] // No collection this day
  }
];

/** ✅ Multi-Dot Marked Dates for Calendar */
export function getMarkedDates() {
  const marked = {};

  agendaItems.forEach((item) => {
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      const dots = item.data
        .filter((e) => e.title)
        .map((e) => ({
          key: e.type || 'default',
          color: typeColors[e.type] || 'gray'
        }));

      marked[item.title] = {
        marked: true,
        dots
      };
    } else {
      marked[item.title] = { disabled: true }; // No collection
    }
  });

  return marked;
}
