import EventGridItem from './EventGridItem';
export default function EventGrid({ events }) {
    return (
        <div className="grid grid-cols-3 gap-6">
            {events && events.length > 0 ? events.map((event) => <EventGridItem event={event} />) : 'No events found'}
        </div>
    );
}
