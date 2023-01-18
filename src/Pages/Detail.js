import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Timer from "../Components/Timer";
import Album from "../Components/album";
import {useState, useEffect} from "react";

function Detail() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Make API call to WordPress site to retrieve posts
        fetch('http://spaceuc.local/wp-json/wp/v2/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);



    return (

        <div  className={"bgblack container-fluid overflow-hidden"}>

            <div className={"bggrain text-white"}>
                <div className={"container-fluid "}>
                    <div className={"row"}>
                    <aside className={"col-3"}>
                        <div className={"h-100 linha"}>
                        {posts[2] &&
                            <div key={posts[0].id}>
                                <div dangerouslySetInnerHTML={{ __html: posts[0].content.rendered }} />
                            </div>
                        }
                        </div>
                    </aside>
                    <div className={"detaildiv col px-5 mr-5 mx-5 nunito"}>
                        {posts[2] &&
                            <div key={posts[2].id}>
                                <h2 className={"amiri"}>{posts[1].title.rendered}</h2>
                                <div dangerouslySetInnerHTML={{ __html: posts[1].content.rendered }} />
                            </div>
                        }
                    </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Detail;


