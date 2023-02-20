import { Footer, Header } from 'src/components/organisms';
import { MyRecord, Top } from 'src/components/pages';

import '@fontsource/noto-sans-jp';
import '@fontsource/inter';

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      {/* <MyRecord /> */}
      <Footer />
    </div>
  );
}

export default App;
