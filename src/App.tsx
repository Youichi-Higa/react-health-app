import { Footer, Header } from 'src/components/organisms';
import { Top } from 'src/components/pages';

import '@fontsource/noto-sans-jp';
import '@fontsource/inter';

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <Footer />
    </div>
  );
}

export default App;
