import { FC } from "react"
import { Banner } from "./common/components/banner.component";
import { Header } from "./common/components/header.component";
import { Feed } from "./modules/feed/feed.component";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return  <div>
   <Header/>
   <Banner/>
   <Feed/>
  </div> 
}
 
export default App;
