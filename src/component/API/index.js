import { CircularProgress } from "@mui/material"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getArticles } from "../../store/api/action"
import { selectArticlesError, selectArticlesList, selectArticlesLoading } from "../../store/api/selector"


export const Api = () => {

    const dispatch = useDispatch()
    const articles = useSelector(selectArticlesList)
    const isLoading = useSelector(selectArticlesLoading)
    const error = useSelector(selectArticlesError)

    const reuqestArticles = async() => {
        dispatch(getArticles())
    }
    useEffect(()=>{
        reuqestArticles()
    },[])
    return <div>
        <h3>Api</h3>
        {isLoading ? <CircularProgress/> : <div>
            <button onClick={reuqestArticles}>Request</button>
        {error && <h4>ERROR:{error}</h4>}
        {articles.map((el=>
            <p key={el.id}>{el.title}</p>))}
        </div>}
        </div>
}