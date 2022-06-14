import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import CardHome from '../Component/CardHome'
import SmallCard from '../Component/SmallCard'
import { store } from './Details'

const Home = () => {

  const [detail, setDetail] = useContext(store);
  return (

    <div>
    <div  className='Home'>
      
        <div className="home__container">
      <div className="home__first">
        <h1>beautiful scenery</h1>
      </div>
      <div className="home__sec">
       <Link to="/fitness" > <img src="data:image/jpeg;base64,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" alt="not foun" /></Link>
       
      </div>
      </div>
      
      <div className="home__thir">
      <h4>LAKE VIEW</h4>
       <Link to='/technology'>   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-4tV7FFSuZokyIch4zTFHvSJLB4oUFblDX2fi95N3PUd-tmACLxfaIcVGEcphKOlS-E&usqp=CAU" alt="not found" /></Link>
          </div>
          <h1 style={{marginTop:"40px"}}>The Latest</h1>
          <hr style={{width:"200px",  thickness:"20px"}} />
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "bollywood" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Articles</h1>
                
                <h1 className='Top' >Top Posts</h1>
                <hr style={{width:"200px",  thickness:"20px",}} />
                

                <div className='rightbar2'>
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className="sidebar2">
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Stories</h1>
                <hr />

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer1" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer2" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer3" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                    
    </div>
  
    </div>
  )
}

export default Home