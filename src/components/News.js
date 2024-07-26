import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import temp from "./temp.jpeg";


const News=(props)=> {
  
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [total, settotal] = useState(0)

  const updateNews=async ()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true)
    let data = await fetch(url);
    props.setProgress(50);
    let parseddata = await data.json();
    props.setProgress(70);
    setarticles(parseddata.articles.filter((elem) => elem.urlToImage !== null && elem.urlToImage !==""))
    setloading(false)
    settotal(parseddata.totalResults)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])
 
  const handlePrevious = async () => {
    setpage(page-1)
    updateNews()
  };

  const handleNext = async () => {
    setpage(page+1)
    updateNews()
  };
 
    return (
      <>
        <h2 className="my-6 text-center" style={{fontSize:"50px", margin:"35px 0px",marginTop:"90px"}}>{props.category.charAt(0).toUpperCase()+props.category.slice(1)} News Headlines</h2>
          <div className="container my-3">
            <div className="row">
              {!loading && articles.map((element) => {
                  return (
                    <div key={element.url} className="col-md-4">
                      <NewsItem 
                        title={ element.title? element.title.slice(0, 40): "No Title"} 
                        description={element.description? element.description.slice(0, 88): "No description available"}
                        imageurl={element.urlToImage ? element.urlToImage : temp}
                        newsurl={element.url}
                        author={element.author ? element.author : "Unknown"}
                        date={element.publishedAt? element.publishedAt.slice(0, 10): "Unknown"}
                        source={element.source.name ? element.source.name : "Unknown"}
                      />
                    </div>
                          );
                })}
              {loading && <Loading />}
            </div>
          </div>

        <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevious}>👈🏻Previous</button>
          <button disabled={page + 1 > Math.ceil(total / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNext}>Next👉🏻</button>
        </div>
      </>
    );
  }

  News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 20,
  };

  News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

export default News;
