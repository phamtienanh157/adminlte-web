import './Gallery.scss';
import { useEffect, useState } from 'react';
import { getListImage } from '../../api/image';
import './Custom.scss';
function Gallery() {
    const [listImage, setlistImage] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const getData = () => {
        getListImage().then(res => {
            setlistImage(res.data.concat(listImage));
            console.log(res.data);
        })
    }
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.scrollHeight ||
            isFetching
        ) {
            return;
        }
        setIsFetching(true);
    };
    useEffect(() => {
        getData();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        getData();
        setIsFetching(false);
    }, [isFetching]);

    return (
        <div className="gallery" id="gallery">
            {listImage.map((item, index) => (
                <img key={index} src={item.download_url} alt="Đây là ảnh" />
            ))}
        </div>
    )
}
export default Gallery;