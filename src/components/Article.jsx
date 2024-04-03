import { useContext } from "react";
import { GlobalContext } from "../context";

//2 cara conditional renderring dengan mengkonstruksi komponen

// Pertama
const  ArticleStatus  = ({isNew}) => {
    return isNew && <span>--- Baru!!!</span>
}

// Kedua
const NewArticle = () => {
    return <span>----Baru!!!!</span>
}
function Article(props) {
    const user = useContext(GlobalContext);

    return (
        <>
            <h3>{props.title}</h3>
            <small>
                Date: {props.date}, tags: {props.tags.join(", ")}

                <ArticleStatus isNew = {props.isNew}/>
                {/* <NewArticle isNew = {props.isNew} />    */}

                 {/* 2 cara conditional rendering yang  biasa  */}
                {/* {props.isNew ? "-Baru!!" : "-Lama"}; */}
                {/* {props.isNew && " -Baru!!"}  */}
            </small>
            <div>
                <small>Ditulis Oleh: {user.name}. Umur: {user.age} </small>
            </div>
            
        </>
    );
}

export default Article;