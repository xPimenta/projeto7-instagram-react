import ReactDOM from 'react-dom';

import Top from './components/Top';
import Posts from './components/Posts';
import Sugests from './components/Sugests'
import Stories from './components/Stories';

function Page(){

  return (
    <>
      <Top /> 
      <main class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sugests />
        </main>
    </>
  );
}

ReactDOM.render(Page(), document.querySelector(".root"));