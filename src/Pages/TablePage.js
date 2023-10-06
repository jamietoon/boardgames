
import SortableTable from '../Components/SortableTable';

function TablePage (){

    const data = [

        {title: "Lords of Waterdeep", date: "10-3", players: 5, rating: 9},
        {title: "7 Wonders", date: "10-4", players: 3, rating: 6},
        {title: "Clue", date: "10-5", players: 2, rating: 3},
        {title: "Settlers of Catan", date: "10-5", players: 3, rating: 7},

    ];

    const config = [
        {
            label: 'Title',
            render: (entry) => <div >{entry.title}</div>,
            sortValue: (entry) => entry.title
        },
        {
            label: 'Date',
            render: (entry) => <div >{entry.date}</div>,
            sortValue: (entry) => entry.date
        },
        {
            label: 'Players',
            render: (entry) => <div >{entry.players}</div>,
            sortValue: (entry) => entry.players
        },
        {
            label: 'Rating',
            render: (entry) => <div >{entry.rating}</div>,
            sortValue: (entry) => entry.rating
        },

    ];

    const keyFn = (entry) => {

        return entry.title;
    };

return <div>
    <SortableTable data={data} config={config} keyFn={keyFn}/>
</div>
};

export default TablePage;