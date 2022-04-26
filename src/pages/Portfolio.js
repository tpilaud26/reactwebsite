import { useEffect, useState } from "react";
import Card from "../component/Card";
import Pagination from "../component/Pagination";

const Portfolio = () => {




    // On declare la variable joke et sa methode setJoke
    // les deux en meme temp grace a la methode useState
    let [joke, setJoke] = useState('');

    const loadJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then(data => {
                setJoke(data.value);
                console.log(data);
            })

    }

    const nextPage = (page) => {
        setPage(page);
        console.log("Page", page)
    }

    let [page, setPage] = useState(1);
    let [gallery, setGallery] = useState([]);

    const loadPics = () => {
        fetch("https://picsum.photos/v2/list?page=" + page + "&limit=12")
            .then(response => response.json())
            .then(data => {
                setGallery(data);
                console.log(data);
            })

    }
    // useEffect est un hook 

    // comme le ng onInit
    useEffect(() => loadJoke, []);
    useEffect(() => loadPics, [page]);

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Portfolio</h1>
                        <button className="btn-dark" onClick={loadJoke}>Chuck Norris ?</button>
                        <p>{joke}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse orci nibh, rhoncus et semper quis, luctus in est. Proin at nisl elementum, tincidunt risus nec, faucibus dolor. Mauris quis efficitur sapien. Donec ultricies eu felis nec dignissim. Sed vulputate sem non dui vehicula, in ultricies sapien consequat. Morbi sed finibus erat, laoreet scelerisque purus. Curabitur sagittis felis ut odio eleifend mollis. In commodo, erat et consectetur faucibus, orci est faucibus arcu, id sodales orci purus eget mauris. Aenean non ullamcorper nisl, quis dapibus dolor. Nullam et ligula id metus feugiat tempor. Integer eget rhoncus enim. Suspendisse condimentum varius orci pretium blandit. Suspendisse sit amet mi bibendum, dapibus ipsum vel, elementum turpis. Ut finibus sed est fringilla malesuada. Praesent malesuada dapibus arcu, ac blandit leo facilisis ornare. Vivamus gravida tincidunt tortor, quis feugiat odio.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Pagination page={page} nextPage={nextPage} />
                    </div>

                </div>
                <div className="row">
                    {
                        gallery.map(
                            item => {
                                let source = `https://picsum.photos/id/${item.id}/320/240`;
                                let title = `Picture by ${item.author}`;
                                let id = item.id;
                                let height = item.height
                                let width = item.width
                                return (
                                    <Card key={id} source={source} title={title} height={height} width={width} />

                                )
                            }
                        )
                    }


                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Pagination page={page} nextPage={nextPage} />

                </div>

            </div>
        </section >
    )
}

export default Portfolio