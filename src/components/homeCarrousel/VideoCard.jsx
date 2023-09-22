import ReactPlayer from "react-player";

function VideoCard(props){
    return (
      <ReactPlayer className='reactPlayer' url={props.url} light={props.miniatura} playing controls width='100%' height='100%'/> 
      )
}

export default VideoCard