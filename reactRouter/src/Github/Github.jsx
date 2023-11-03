import React,{useEffect,useState} from 'react'

function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
   fetch('https://api.github.com/users/abhisek247767')
   .then(response => response.json())
   .then(data => {
      console.log(data);
      setData(data)
   })
  }, [])
  return (
    <div className='text-center m-4 bg-orange-700	 text-white p-4 text-2xl'>Github followers: {data.followers}
      <p> Total Contribution in open source: {data.public_repos}</p>

    
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github