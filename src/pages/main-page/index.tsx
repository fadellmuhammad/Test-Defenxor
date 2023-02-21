import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

type SelectEvent = React.ChangeEvent<HTMLSelectElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

const data: Array<DataType> = [
  {
    id: 1,
    name: 'fadel',
    age: 19,
    address: 'Jalan srijaya negara no.19',
  },
  {
    id: 2,
    name: 'deny',
    age: 20,
    address: 'Jalan srijaya negara no.19',
  },
  {
    id: 3,
    name: 'raihan',
    age: 17,
    address: 'Jalan srijaya negara no.19',
  },
  {
    id: 4,
    name: 'ikbal',
    age: 19,
    address: 'Jalan srijaya negara no.19',
  },
  {
    id: 5,
    name: 'pascal',
    age: 19,
    address: 'Jalan srijaya negara no.19',
  },
  {
    id: 6,
    name: 'naufal',
    age: 18,
    address: 'Jalan srijaya negara no.19',
  },
  {
    id: 7,
    name: 'firhan',
    age: 15,
    address: 'Jalan srijaya negara no.19',
  },
]

interface DataType {
  name: string;
  age: number;
  address: string;
  id: number;
}

const MainPage: React.FC = () => {
  const [select, setSelect] = useState(3)
  const [page, setPage] = useState([0, select])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  const handleSearch = (e: InputEvent) => {
    setSearch(e.target.value)
  }

  const handleSelect = (e: SelectEvent) => {
    setSelect(parseInt(e.target.value))
  }

  const Column = ({ data }: { data: DataType }) => {
    return (
      <tr>
        <td>
          <Link to={`detail/${data.id}`} state={data} className={styles.name}>
            {data.name}
          </Link>
        </td>
        <td>{data.age}</td>
        <td>{data.address}</td>
      </tr>
    )
  }

  const NextPage = () => {
    const num = select
    if (page[1] < data.length) {
      setPage([page[0] + num, page[1] + select])
    }
  }

  const PrevPage = () => {
    const num = select
    if (page[0] > 5) {
      setPage([page[0] - num, page[1] - select])
    } else {
      setPage([0, num])
    }
  }

  useEffect(() => {
    setPage([0, select])
  }, [select])

  return (
    <div className={styles.mainpage}>
      <h1>MainPage</h1>
      <div className={styles.route}>
        <Link to='/login' ><button className={styles.button}>Login</button></Link>
        <Link to='/profile'><button className={styles.button}>Profile</button></Link>
      </div>
      <div className={styles.head}>
        <div className={styles.search_container}>
          <input
            type="text"
            className="input-search"
            onChange={handleSearch}
            placeholder="search"
          />
        </div>
        <div className={styles.btn_sort}>
          <button onClick={() => setSort(!sort)} className={styles.button}>
            sort name
          </button>
        </div>
      </div>
      <div className={styles.table_container}>
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Umur</th>
              <th>Alamat</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((data) => {
                const re = RegExp(
                  `.*${search.toLowerCase().split('').join('.*')}.*`
                )
                return data.name.match(re)
              })
              .sort((a: DataType, b: DataType) =>
                sort ? a.name.localeCompare(b.name) : 0
              )
              .map((val) => <Column key={val.id} data={val} />)
              .slice(page[0], page[1])}
          </tbody>
        </table>
        <div className={styles.footer}>
          <div className={styles.select_item}>
            <select name="select" onChange={handleSelect}>
              <option value={3}>3</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className={styles.control_page}>
            <div className="prev">
              <button onClick={PrevPage} className={styles.button}>
                prev
              </button>
            </div>
            <div className="next">
              <button onClick={NextPage} className={styles.button}>
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
