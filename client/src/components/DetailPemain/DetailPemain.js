import React, {useEffect, useState} from "react";

const DetailPemain = () => {

  const [detailpemain, setDetailPemain] = useState([]);
    const getDetailPemain = async() => {
      
        try {
            const response = await fetch("http://localhost:3000/detailpemain")
            const jsonData = await response.json()
            

            setDetailPemain(jsonData)
            
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getDetailPemain();
    }, [])

    console.log(detailpemain)

    return  <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Name</th>
        <th>Ranking</th>
      </tr>
    </thead>
    <tbody>
        {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        </tr>*/}

      {detailpemain.map(detailpemain => (
        <tr>
          <td>{detailpemain.namapemain}</td>
          <td>{detailpemain.rank}</td>
        </tr>
      ))}
      
    </tbody>
  </table>
};

export default DetailPemain;