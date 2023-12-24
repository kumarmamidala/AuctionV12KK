import DataTable from 'react-data-table-component'
import './DataTable.css'

const columns = [
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Bids/Offers',
    selector: (row) => row.bids,
  },
  {
    name: 'Traffic',
    selector: (row) => row.traffic,
  },
  {
    name: 'Estimated Value',
    selector: (row) => row.estimated,
  },
  {
    name: 'Price',
    selector: (row) => row.price,
  },
  {
    name: 'Enter bid',
    selector: (row) => row.bid,
  },
  {
    name: 'Time Left',
    selector: (row) => row.time,
  },
]

const data = [
  {
    id: 1,
    title: 'Sirijewels.gold',
    bids: 25,
    traffic: '-',
    estimated: '-',
    price: 'Rs165,289*',
    time: '6D 10H',
  },
  {
    id: 2,
    title: 'Sirijewels.gold',
    bids: 25,
    traffic: '-',
    estimated: '-',
    price: 'Rs165,289*',
    time: '6D 10H',
  },
  {
    id: 3,
    title: 'Sirijewels.gold',
    bids: 25,
    traffic: '-',
    estimated: '-',
    price: 'Rs165,289*',
    time: '6D 10H',
  },
  {
    id: 4,
    title: 'Sirijewels.gold',
    bids: 25,
    traffic: '-',
    estimated: '-',
    price: 'Rs165,289*',
    time: '6D 10H',
  },
  {
    id: 5,
    title: 'Sirijewels.gold',
    bids: 25,
    traffic: '-',
    estimated: '-',
    price: 'Rs165,289*',
    time: '6D 10H',
  },
  {
    id: 6,
    title: 'Sirijewels.gold',
    bids: 25,
    traffic: '-',
    estimated: '-',
    price: 'Rs165,289*',
    time: '6D 10H',
  },
  {
    id: 7,
    title: 'Sirijewels.gold',
    bids: 25,
    traffic: '-',
    estimated: '-',
    price: 'Rs165,289*',
    time: '6D 10H',
  },
]

function DataTablee() {
  return (
    <div className="table-data">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
export default DataTablee
