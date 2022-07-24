import video from "../data/video.js";
import Rendervideo from "../components/Rendervideo";
import Rendertitle from "../components/Rendertitle";
import Rendercomments from "../components/Rendercomments";
import Renderlikes from "../components/Renderlikes"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Rendervideo embedUrl={video.embedUrl}/>
      <Rendertitle views={video.views} createdAt={video.createdAt} title={video.title}/>
      <Renderlikes likes={video.upvotes} dislikes={video.downvotes}/>
      <Rendercomments comments={video.comments}/>
    </div>
  );
}

export default App;
